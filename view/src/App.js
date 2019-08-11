import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import Kruskal from "./components/Kruskal/Kruskal";
import Dijkstra from "./components/Dijkstra/Dijkstra";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import ViewGraph from "./components/ViewGraph/ViewGraph";
import Graph from "./components/Graph/Graph";
import { UserRoute, GuestRoute } from "./routes";

import { Login, Register } from "./components/Auth/index";

class App extends Component {
  render() {
    const isAuthenticated = this.props.isAuthenticated;
    return (
      <Switch>
        <Route path="/" exact name="Home" component={Landing} />
        <GuestRoute
          path="/contact"
          exact
          name="Contact"
          component={Contact}
          isAuthenticated={isAuthenticated}
        />
        <GuestRoute
          path="/about"
          exact
          name="About"
          component={About}
          isAuthenticated={isAuthenticated}
        />
        <GuestRoute
          path="/services"
          exact
          name="Services"
          component={Services}
          isAuthenticated={isAuthenticated}
        />
        <GuestRoute
          path="/register"
          exact
          name="Register"
          component={Register}
          isAuthenticated={isAuthenticated}
        />
        <GuestRoute
          path="/login"
          exact
          name="Login"
          component={Login}
          isAuthenticated={isAuthenticated}
        />
        <UserRoute
          path="/dashboard"
          exact
          name="Dashboard"
          component={Dashboard}
          isAuthenticated={isAuthenticated}
        />
        <UserRoute
          path="/kruskal"
          exact
          name="Kruskal"
          component={Kruskal}
          isAuthenticated={isAuthenticated}
        />
        <UserRoute
          path="/dijkstra"
          exact
          name="Dijkstra"
          component={Dijkstra}
          isAuthenticated={isAuthenticated}
        />

        <UserRoute
          path="/graph"
          exact
          name="Graph"
          component={Graph}
          isAuthenticated={isAuthenticated}
        />
        <UserRoute
          path="/:graphID"
          exact
          name="ViewGraph"
          component={ViewGraph}
          isAuthenticated={isAuthenticated}
        />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(App);
