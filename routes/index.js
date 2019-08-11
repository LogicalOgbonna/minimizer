var express = require("express");
var router = express.Router();
var jsgraphs = require("js-graph-algorithms");
const passport = require("passport");
const User = require("../models/User");

router.post(
  "/kruskal",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const graph = req.body;
    const graphWeight = graph.length * 2;
    let g = new jsgraphs.WeightedGraph(graphWeight);
    const map = [];
    for (let i = 0; i < graph.length; i++) {
      map.push(
        `${graph[i].labelFrom}: ${graph[i].from}`,
        `${graph[i].labelTo}: ${graph[i].to}`
      );
    }

    for (let i = 0; i < graph.length; i++) {
      g.addEdge(
        new jsgraphs.Edge(graph[i].from, graph[i].to, graph[i].distance)
      );
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
  }
);

router.get(
  "/kruskal",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    User.findById(req.user._id).then(user => {
      res.json(user.graph);
    });
  }
);

router.post(
  "/saveKruskal",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    const graph = {
      edges: req.body.edges,
      nodes: req.body.nodes
    };
    User.findById(req.user._id).then(user => {
      user.graph.push(graph);
      user.save().then(data => res.json(data.graph));
    });
  }
);

router.post(
  "/dijkstra",
  // passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    var g = new jsgraphs.WeightedDiGraph(8);
    g.addEdge(new jsgraphs.Edge(0, 1, 5.0));
    g.addEdge(new jsgraphs.Edge(0, 2, 9.0));
    g.addEdge(new jsgraphs.Edge(0, 3, 8.0));
    g.addEdge(new jsgraphs.Edge(1, 2, 12.0));
    g.addEdge(new jsgraphs.Edge(1, 3, 15.0));
    // g.addEdge(new jsgraphs.Edge(1, 3, 4.0));
    g.addEdge(new jsgraphs.Edge(2, 3, 3.0));
    // g.addEdge(new jsgraphs.Edge(2, 6, 11.0));
    // g.addEdge(new jsgraphs.Edge(3, 6, 9.0));

    var dijkstra = new jsgraphs.Dijkstra(g, 0);

    for (var v = 1; v < g.V; ++v) {
      if (dijkstra.hasPathTo(v)) {
        var path = dijkstra.pathTo(v);
        console.log("=====path from 0 to " + v + " start==========");
        for (var i = 0; i < path.length; ++i) {
          var e = path[i];
          console.log(e.from() + " => " + e.to() + ": " + e.weight);
        }
        console.log("=====path from 0 to " + v + " end==========");
        console.log("=====distance: " + dijkstra.distanceTo(v) + "=========");
      }
    }
  }
);

module.exports = router;
