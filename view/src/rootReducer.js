import { combineReducers } from "redux";
import user from "./reducers/auth";
import graph from "./reducers/graph";

export default combineReducers({
  user,
  graph
});
