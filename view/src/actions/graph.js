import axios from "axios";
import { KRUSKAL, SAVE_KRUSKAL, GRAPH_ERROR, USER_GRAPH } from "./types";

export const kruskalMST = kruskal => ({
  type: KRUSKAL,
  kruskal
});

export const errors = error => ({
  type: GRAPH_ERROR,
  error
});
export const saveKruskal = data => ({
  type: SAVE_KRUSKAL,
  data
});
export const userGraph = graph => ({
  type: USER_GRAPH,
  graph
});
export const kruskal = graph => dispatch => {
  axios
    .post("/api/kruskal", graph)
    .then(res => {
      const row = res.data;
      const edges = [];
      const nodes = [];
      const location = new Array(row.length);
      let counter = 0;
      for (let i = 0; i < row.length; i++) {
        if (i === 0) {
          location[counter] = row[i].from;
          location[++counter] = row[i].to;
          nodes.push({
            id: row[i].from,
            label: row[i].from
          });
          edges.push({
            from: row[i].from,
            to: row[i].to,
            length: row[i].distance,
            label: "" + row[i].distance
          });

          nodes.push({
            id: row[i].to,
            label: row[i].to
          });
        } else {
          if (!location.includes(row[i].from)) {
            location[++counter] = row[i].from;
            nodes.push({
              id: row[i].from,
              label: row[i].from
            });
            edges.push({
              from: row[i].from,
              to: row[i].to,
              length: row[i].distance,
              label: "" + row[i].distance
            });
          }

          if (!location.includes(row[i].to)) {
            location[++counter] = row[i].to;
            nodes.push({
              id: row[i].to,
              label: row[i].to
            });
            edges.push({
              from: row[i].from,
              to: row[i].to,
              length: row[i].distance,
              label: "" + row[i].distance
            });
          } else {
            edges.push({
              from: row[i].from,
              to: row[i].to,
              length: row[i].distance,
              label: "" + row[i].distance
            });
          }
        }
      }
      const graph = {
        nodes,
        edges
      };
      dispatch(kruskalMST(graph));
    })
    .catch(err => dispatch(errors(err)));
};

export const saveGraph = graph => dispatch => {
  axios
    .post("/api/saveKruskal", graph)
    .then(data => {
      dispatch(saveKruskal(data.data));
    })
    .catch(err => dispatch(errors(err)));
};

export const getUserGraph = () => dispatch => {
  axios
    .get("/api/kruskal")
    .then(graph => {
      dispatch(userGraph(graph.data));
    })
    .catch(error => dispatch(errors(error)));
};
