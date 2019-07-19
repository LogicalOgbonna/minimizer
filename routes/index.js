var express = require("express");
var router = express.Router();
var jsgraphs = require("js-graph-algorithms");

router.post("/kruskal", (req, res) => {
  const graph = req.body;
  const graphWeight = graph.length * 2;
  console.log(graphWeight);
  let g = new jsgraphs.WeightedGraph(graphWeight);
  const map = [];
  for (let i = 0; i < graph.length; i++) {
    map.push(
      `${graph[i].labelFrom}: ${graph[i].from}`,
      `${graph[i].labelTo}: ${graph[i].to}`
    );
  }

  for (let i = 0; i < graph.length; i++) {
    g.addEdge(new jsgraphs.Edge(graph[i].from, graph[i].to, graph[i].distance));
  }

  var kruskal = new jsgraphs.KruskalMST(g);
  var mst = kruskal.mst;
  let final = [];
  for (var i = 0; i < mst.length; ++i) {
    let e = mst[i];
    let v = e.either();
    let w = e.other(v);
    for (let i = 0; i < map.length; i++) {
      if (Number(map[i].split(":")[1]) === v) {
        v = map[i].split(":")[0];
      }
      if (Number(map[i].split(":")[1]) === w) {
        w = map[i].split(":")[0];
      }
    }
    // final.push(v + " => " + w + ": " + e.weight);
    final.push({
      from: v,
      to: w,
      distance: e.weight
    });
  }
  res.json(final);
});

module.exports = router;
