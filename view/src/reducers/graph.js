import {
  KRUSKAL,
  SAVE_KRUSKAL,
  GRAPH_ERROR,
  USER_LOGGED_OUT
} from "../actions/types";

const graph = (state = {}, action = {}) => {
  switch (action.type) {
    case KRUSKAL:
      return {
        ...state,
        kruskal: action.kruskal
      };
    case SAVE_KRUSKAL:
      return {
        ...state,
        saved: action.data
      };
    case GRAPH_ERROR:
      return {
        ...state,
        errors: action.error
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        kruskal: {},
        saved: []
      };
    default:
      return state;
  }
};

export default graph;
