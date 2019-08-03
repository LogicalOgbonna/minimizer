var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");
const validation = require("../validation/general-validation");

//Models
const User = require("../models/User");

/* POST route creates a user. */
router.post("/auth/signup", (req, res, next) => {
  const { errors, isValid } = validation.register(req.body);
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res
        .status(400)
        .json({ email: "User with this email already exist" });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", // Size
        r: "pg", // Rating
        d: "mm" // Default
      });
      const admin = req.body.admin ? req.body.admin : false;
      const newUser = new User({
        // name: req.body.name,
        email: req.body.email,
        avatar,
        passwordHarsh: req.body.password,
        admin,
        reason: req.body.reason
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.passwordHarsh = hash;
          newUser
            .save()
            .then(user => {
              const payload = {
                id: user.id
              };
              jwt.sign(payload, process.env.secretOrKey, (err, token) => {
                res.json({
                  success: "User created sucessfully",
                  token: "Bearer " + token
                });
              });
            })
            .catch(err => res.json(err));
        });
      });
    }
  });
});

/* POST route Logs user in. */
router.post("/auth/signin", (req, res, next) => {
  const { errors, isValid } = validation.login(req.body);
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = "email or password not correct";
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.passwordHarsh).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = {
          id: user.id
        }; // Create JWT Payload

        // Sign Token
        jwt.sign(payload, process.env.secretOrKey, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        errors.password = "email or password not correct";
        return res.status(400).json(errors);
      }
    });
  });
});

/*GET route of current user */

router.get("/auth/current/:id", (req, res, next) => {
  const { errors, isValid } = validation.getUser(req.params);
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findById(req.params.id).then(user => res.json(user));
  // res.json(req.body);
});
module.exports = router;
