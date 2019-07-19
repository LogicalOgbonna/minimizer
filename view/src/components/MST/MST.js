import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./MST.css";
class Career extends Component {
  state = {};

  render() {
    return (
      <div>
        <Nav active="mst" />
        <section id="mst" className="py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-2">
                <h1 className="text-bold text-center text-uppercase">
                  Minimal Spanning Tree (MST) Problem{" "}
                </h1>
                <p className="text-justify">
                  A minimum spanning tree (MST) or minimum weight spanning tree
                  is a subset of the edges of a connected, edge-weighted
                  undirected graph that connects all the vertices together,
                  without any cycles and with the minimum possible total edge
                  weight. MST problem is of high importance in network
                  optimization, but it is also difficult for the traditional
                  network optimization technique to deal with. A good example
                  would be a road construction company charged to construct
                  streets to connect houses in a particular city, constructing
                  the roads (vertices) requires a graph containing the houses
                  (nodes) to be connected by the road. Some of the roads might
                  be too expensive, either because they are longer, or the
                  topography of the land (a valley or mountain), these roads
                  would be represented with larger weight. Having in mind the
                  cost of constructing these roads, larger weights on roads
                  implies higher costs, a spanning tree for this graph would be
                  as subset of those roads that has no cycles but still connects
                  every house; there might be several spanning trees possible. A
                  minimum spanning tree would be one with the lowest total cost,
                  representing the least expensive path for constructing the
                  road.
                </p>
                <p className="text-justify">
                  This is exactly what this project is set to achieve, by
                  developing a fast and reliable computer program that could
                  compute at a great level a cost-effective MTS of any
                  undirected graph network supplied by a user.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 offset-2">
                <h1 className="text-bold text-center text-uppercase">
                  Minimal Spanning Tree (MST) Algorithms{" "}
                </h1>
              </div>
            </div>
          </div>
        </section>
        <div className="row">
          <div className="col-md-12" />
        </div>
        <Footer />
      </div>
    );
  }
}

Career.propTypes = {
  isAuthenticated: propTypes.bool
};

// const mapStateToProps = state => ({
//   isAuthenticated: state.user.isAuthenticated,
//   career: state.user.career,
//   riasec: state.user.riasec
// });

export default connect()(Career);
// mapStateToProps,
// { addSubject, getPersonality }
