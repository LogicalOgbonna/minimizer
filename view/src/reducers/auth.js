import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  USER_CREATED,
  AUTH_ERRORS
} from "../actions/types";
import _ from "lodash";

const initialState = {
  user: {},
  isAuthenticated: false
};
const User = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        user: action.user,
        isAuthenticated: !_.isEmpty(action.user)
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        user: {},
        isAuthenticated: false
      };
    case USER_CREATED:
      return {
        ...state,
        user: action.user
      };
    case AUTH_ERRORS:
      return {
        ...state,
        authError: action.error
      };
    default:
      return state;
  }
};

export default User;
