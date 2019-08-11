import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import readXlsxFile from "read-excel-file";
import Graph from "react-graph-vis";
import { kruskal, saveGraph } from "../../actions/graph";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./Kruskal.css";
class Kruskal extends Component {
  state = {
    graph: {},
    loading: false,
    sendGraph: [],
    kruskalGraph: {},
    minimizeLoading: false,
    saveLoading: false
  };
  componentWillReceiveProps(next) {
    if (next.saved.length) {
      this.setState({ saveLoading: false });
    }
    if (Object.keys(next.kruskalGraph).length) {
      this.setState({
        kruskalGraph: next.kruskalGraph,
        minimizeLoading: false
      });
    }
  }

  componentDidMount() {
    if (
      this.props.kruskalGraph &&
      Object.keys(this.props.kruskalGraph).length
    ) {
      this.setState({
        kruskalGraph: this.props.kruskalGraph,
        minimizeLoading: false
      });
    }
  }

  onChange = e => {
    const file = e.target.files[0];
    // let student = {};
    let graph = {};
    let nodes = [];
    let edges = [];
    let sendGraph = [];

    readXlsxFile(file).then(row => {
      for (let i = 1; i < row.length; i++) {
        sendGraph.push({
          from: row[i][0],
          to: row[i][1],
          distance: row[i][2],
          labelFrom: row[i][3],
          labelTo: row[i][4]
        });
      }
      const location = new Array(row.length);
      let counter = 0;
      for (let i = 1; i < row.length; i++) {
        if (i === 1) {
          location[counter] = row[i][3];
          location[++counter] = row[i][4];
          nodes.push({
            id: row[i][0],
            label: row[i][3]
          });
          edges.push({
            from: row[i][0],
            to: row[i][1],
            length: row[i][2],
            label: "" + row[i][2]
          });

          nodes.push({
            id: row[i][1],
            label: row[i][4]
          });
        } else {
          // let edge = 0;
          if (!location.includes(row[i][3])) {
            location[++counter] = row[i][3];
            nodes.push({
              id: row[i][0],
              label: row[i][3]
            });
            edges.push({
              from: row[i][0],
              to: row[i][1],
              length: row[i][2],
              label: "" + row[i][2]
            });
          }

          if (!location.includes(row[i][4])) {
            location[++counter] = row[i][4];
            nodes.push({
              id: row[i][1],
              label: row[i][4]
            });
            edges.push({
              from: row[i][0],
              to: row[i][1],
              length: row[i][2],
              label: "" + row[i][2]
            });
          } else {
            edges.push({
              from: row[i][0],
              to: row[i][1],
              length: row[i][2],
              label: "" + row[i][2]
            });
          }
        }
      }
      graph = {
        nodes,
        edges
      };
      this.setState({ graph });
      this.setState({ sendGraph });
    });
  };

  validate = data => {
    const errors = {};
    if (!data.area) errors.area = "Can't be blank";
    if (Object.keys(data.student) === 0)
      errors.student = "Please Select a file";

    return errors;
  };
  onSubmit = e => {
    e.preventDefault();
    if (Object.keys(this.state.graph).length > 0) {
      this.props.kruskal(this.state.sendGraph);
      this.setState({ minimizeLoading: false });
    }
  };

  onSave = e => {
    e.preventDefault();
    if (!Object.keys(this.props.kruskalGraph).length) {
      this.setState({ errors: "No Graph To Save" });
    } else {
      this.props.saveGraph(this.props.kruskalGraph);
      this.setState({ saveLoading: true });
    }
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
        console.log(nodes, edges);
      }
    };
    return (
      <div>
        <Nav active="kruskal" />
        <div className="row">
          <div className="col-md-12">
            <form
              // onSubmit={this.onSubmit}
              style={{ marginTop: "7%", marginBottom: "3%" }}
              className=""
            >
              <div className="row">
                <div className="col-sm-3 col-md-3 col-lg-3 " />
                <div className="col-sm-6 col-md-6 col-lg-6 ">
                  <div className="row">
                    <div className="col-md-2" />
                    <div className="col-md-8 ">
                      <h5 className="mb-3 text-center">Upload Your Map</h5>
                      <div className="input-group mb-3">
                        <input
                          type="file"
                          className="form-control"
                          placeholder="Recipient's username"
                          aria-label="Recipient's username"
                          name="excel"
                          id="excel"
                          aria-describedby="basic-addon2"
                          onChange={this.onChange}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text" id="basic-addon2">
                            <button className="btn btn-primary">Upload</button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2" />
                  </div>
                </div>
                <div className="col-sm-3 col-md-3  col-lg-3" />
              </div>
            </form>

            <div className="container">
              <div className="row mb-5 ">
                <div className="col-md-1" />
                <div
                  className=" col-md-10 col-lg-10 col-sm-10"
                >
                  <h3 className="text-muted text-center">Your Graph</h3>
                  {Object.keys(this.state.graph).length > 0 && (
                    <Graph
                      graph={this.state.graph}
                      options={options}
                      events={events}
                      style={{ height: "100%", width: "100%" }}
                    />
                  )}
                </div>
                <div className="col-md-1" />
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-md-1" />

              <div className=" col-md-10 col-lg-10 col-sm-10">
                <h3 className="text-muted text-center">Cost Effective Graph</h3>

                {Object.keys(this.state.kruskalGraph).length > 0 && (
                  <Graph
                    graph={this.state.kruskalGraph}
                    options={options}
                    events={events}
                    style={{ height: "100%", width: "100%" }}
                  />
                )}
              </div>
              <div className="col-md-1" />
            </div>

            <div className="row mb-5">
              <div className="col-md-3" />

              <div className="col-md-3 col-sm-3 col-lg-3 text-center mt-2">
                <button
                  disabled={this.state.minimizeLoading}
                  onClick={this.onSubmit}
                  className="btn btn-primary"
                >
                  {this.state.minimizeLoading ? "Minimizing..." : "Minimize"}
                </button>
              </div>

              <div className="col-md-3 col-sm-3 col-lg-3 text-center mt-2">
                <button
                  disabled={this.state.saveLoading}
                  onClick={this.onSave}
                  className="btn btn-primary"
                >
                  {this.state.saveLoading ? "Saving..." : "Save"}
                </button>
              </div>
              <div className="col-md-3" />
            </div>
          </div>
        </div>

        <Footer isAuthenticated={true} />
      </div>
    );
  }
}

Kruskal.propTypes = {
  isAuthenticated: propTypes.bool
};

const mapStateToProps = state => ({
  kruskalGraph: state.graph.kruskal,
  saved: state.graph.saved,
  errors: state.graph.errors
});

export default connect(
  mapStateToProps,
  { kruskal, saveGraph }
)(Kruskal);
