import { KRUSKAL } from "../actions/types";

const graph = (state = {}, action = {}) => {
  switch (action.type) {
    case KRUSKAL:
      return {
        ...state,
        kruskal: action.kruskal
      };
    default:
      return state;
  }
};

export default graph;
