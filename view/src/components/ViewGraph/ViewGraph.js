import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserGraph } from "../../actions/graph";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Graph from "react-graph-vis";

class ViewGraph extends Component {
  state = {
    userGraph: [],
    id: null
  };
  componentDidMount() {
    const id = this.props.match.params.graphID;
    if (this.props.userGraph.length) {
      this.setState({ userGraph: this.props.userGraph, id: +id });
    } else {
      this.props.getUserGraph();
    }
  }
  next = id => e => {
    e.preventDefault();
    // const realId = id
    this.setState({ id: +id + 1 });
  };
  previous = id => e => {
    e.preventDefault();
    this.setState({ id: +id - 1 });
  };
  render() {
    let options = {
      layout: {
        hierarchical: true
      },
      edges: {
        color: "#000000"
      }
    };

    let events = {
      select: function(event) {
        let { nodes, edges } = event;
      }
    };
    return (
      <div>
        <Nav active="kruskal" />

        <div className="container">
          {/* <div className="row">
            <div className="col-md-12">
              <Link to="/dasb"
            </div>
          </div> */}
          <div className="row">
            <div style={{width: "1000px"}} className="col-md-12">
              {this.state.userGraph.length ? (
                <Graph
                  graph={this.state.userGraph[this.state.id]}
                  options={options}
                  events={events}
                  style={{ height: "100%", width: "1000px" }}
                />
              ) : (
                "locding"
              )}
            </div>
          </div>
          <div className="row mb-5">
            {this.state.id >= 1 ? (
              <div className="col-md-3">
                <button
                  className="btn btn-secondary"
                  onClick={this.previous(this.state.id)}
                >
                  Prev
                </button>
              </div>
            ) : (
              <div className="col-md-3" />
            )}
            <div className="col-md-3" />
            <div className="col-md-3" />
            {this.state.id < this.state.userGraph.length - 1 && (
              <div className="col-md-3">
                <button
                  className="btn btn-secondary"
                  onClick={this.next(this.state.id)}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  userGraph: state.graph.userGraph
});

export default connect(
  mapStateToProps,
  { getUserGraph }
)(ViewGraph);
