const path = require("path");

var express = require("express");
var logger = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const passport = require("passport");

var indexRouter = require("./routes/index");
var userRouter = require("./routes/users");

dotenv.config();
var app = express();
// view engine setup

// app.use(logger("dev"));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/api/", indexRouter);
app.use("/api/user/", userRouter);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("view/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "view", "build", "index.html"));
  });
}
const port = process.env.PORT || 2000;

mongoose
  .connect(process.env.MONGODBURI, { useNewUrlParser: true })
  .then(data => {
    console.log("DB connected Succesfully");
    app.listen(port, () => console.log(`App Running on Port ${port}`));
  })
  .catch(err => console.log(err));

// module.exports = app;
