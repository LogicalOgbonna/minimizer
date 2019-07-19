import axios from "axios";
import { KRUSKAL } from "./types";

export const kruskalMST = kruskal => ({
  type: KRUSKAL,
  kruskal
});

export const kruskal = graph => dispatch => {
  axios.post("/api/kruskal", graph).then(res => {
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
    console.log(graph);
    dispatch(kruskalMST(graph));
  });
};
