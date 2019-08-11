import React, { Component } from "react";
import readXlsxFile from "read-excel-file";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

class Dijkstra extends Component {
  state = {
    graph: {},
    loading: false,
    sendGraph: [],
    kruskalGraph: {},
    minimizeLoading: false,
    saveLoading: false
  };

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
      console.log(graph, sendGraph);
      this.setState({ graph });
      this.setState({ sendGraph });
    });
  };

  render() {
    return (
      <div>
        <Nav active="dijkstra" />
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
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dijkstra;
