import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import Kruskal from "./components/Kruskal/Kruskal";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import { UserRoute, GuestRoute } from "./routes";

import { Login, Register } from "./components/Auth/index";

class App extends Component {
  render() {
    const isAuthenticated = this.props.isAuthenticated;
    return (
      <Switch>
        <Route path="/" exact name="Home" component={Landing} />
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
        <Route path="/contact" exact name="Contact" component={Contact} />
        <Route path="/about" exact name="About" component={About} />
        <Route path="/services" exact name="Services" component={Services} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(App);
