const _ = require("lodash");
const Validator = require("validator");

module.exports = {
  login: function(data) {
    const errors = {};
    data.password = data.password === undefined ? "" : data.password;
    data.email = data.email === undefined ? "" : data.email;

    if (!Validator.isEmail(data.email)) {
      errors.email = "Email is invalid";
    }

    if (Validator.isEmpty(data.email)) {
      errors.email = "Email field is required";
    }

    if (Validator.isEmpty(data.password)) {
      errors.password = "Password field is required";
    }

    return {
      errors,
      isValid: _.isEmpty(errors)
    };
  },
  register: function(data) {
    let errors = {};

    // data.name = data.name === undefined ? "" : data.name;
    data.reason = data.reason === undefined ? "" : data.reason;
    data.email = data.email === undefined ? "" : data.email;
    data.password = data.password === undefined ? "" : data.password;
    data.confirm_password =
      data.confirm_password === undefined ? "" : data.confirm_password;

    if (!Validator.isLength(data.reason, { min: 2, max: 30 })) {
      errors.reason = "reason must be between 2 and 30 characters";
    }

    if (Validator.isEmpty(data.reason)) {
      errors.reason = "reason field is required";
    }

    if (Validator.isEmpty(data.email)) {
      errors.email = "Email field is required";
    }

    if (!Validator.isEmail(data.email)) {
      errors.email = "Email is invalid";
    }

    if (Validator.isEmpty(data.password)) {
      errors.password = "Password field is required";
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
      errors.password = "Password must be at least 6 characters";
    }

    if (Validator.isEmpty(data.confirm_password)) {
      errors.confirm_password = "Confirm Password field is required";
    }

    if (!Validator.equals(data.password, data.confirm_password)) {
      errors.confirm_password = "Passwords must match";
    }
    return {
      errors,
      isValid: _.isEmpty(errors)
    };
  },
  getUser: data => {
    let errors = {};

    data.id = data.id === undefined ? "" : data.id;
    if (Validator.isEmpty(data.id)) {
      errors.id = "ID field is required";
    }
    return {
      errors,
      isValid: _.isEmpty(errors)
    };
  }
};
