import axios from "axios";
import jwtDecode from "jwt-decode";

import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  USER_CREATED,
  AUTH_ERRORS
} from "./types";

import history from "../utils/history";
import setAuthorizationHeader from "../utils/setAuthorizationHeader";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = user => ({
  type: USER_LOGGED_OUT,
  user
});

export const userCreated = user => ({
  type: USER_CREATED,
  user
});

export const errors = error => ({
  type: AUTH_ERRORS,
  error
});

export const login = user => dispatch => {
  axios
    .post("/api/users/login", user)
    .then(user => {
      const token = user.data.token;
      localStorage.cas = JSON.stringify(token);
      const currentUser = jwtDecode(token);
      dispatch(userLoggedIn(currentUser));
      history.push("/dashboard");
      // window.location.href = "/dashboard";
      setAuthorizationHeader(token);
    })
    .catch(error => {
      // console.log(error.response.data);

      error.response && dispatch(errors(error.response.data));
    });
};

export const register = user => dispatch => {
  axios
    .post("/api/users/register", user)
    .then(res => {
      const token = res.data.token;
      localStorage.cas = JSON.stringify(token);
      const currentUser = jwtDecode(token);
      dispatch(userLoggedIn(currentUser));
      history.push("/dashboard");
      // window.location.href = "/dashboard";
      setAuthorizationHeader(token);
    })
    .catch(error => {
      // console.log(error.response.data);
      dispatch(errors(error.response.data));
    });
};

export const logout = () => dispatch => {
  dispatch(userLoggedOut({}));
  localStorage.cas = "";
  localStorage.code = "";

  setAuthorizationHeader();
  history.push("/");
};
