import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { getUserGraph } from "../../actions/graph";
import { Company } from "../Dashboard/Users";

class Graph extends Component {
  componentDidMount() {
    this.props.getUserGraph();
  }
  render() {
    return (
      <div>
        <Nav />
        <Company graph={this.props.userGraph} />
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
)(Graph);
