import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { getUserGraph } from "../../actions/graph";
import { Researcher, Developer, Company } from "./Users";
import "./Dashboard.css";
class Career extends Component {
  // state = { userGraph: [] };
  componentDidMount() {
    this.props.getUserGraph();
  }
  // componentWillReceiveProps(props) {
  //   if (props.userGraph) {
  //     this.setState({
  //       userGraph: props.userGraph
  //     });
  //   }
  // }
  render() {
    const user = this.props.user.user;
    return (
      <div>
        <Nav active="mst" />
        {user && user.reason === "Research" && <Researcher />}
        {user && user.reason === "Developer" && <Developer />}
        {user && user.reason === "Company" && (
          <Company graph={this.props.userGraph} />
        )}
        <Footer />
      </div>
    );
  }
}

Career.propTypes = {
  user: propTypes.object
};

const mapStateToProps = state => ({
  user: state.user,
  userGraph: state.graph.userGraph
});

export default connect(
  mapStateToProps,
  { getUserGraph }
)(Career);
