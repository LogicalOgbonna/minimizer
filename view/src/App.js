import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Landing from "./components/Landing/Landing";
import MST from "./components/MST/MST";
import Kruskal from "./components/Kruskal/Kruskal";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Services from "./components/Services/Services";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact name="Home" component={Landing} />
        <Route path="/mst" exact name="MST" component={MST} />
        <Route path="/kruskal" exact name="Kruskal" component={Kruskal} />
        <Route path="/contact" exact name="Contact" component={Contact} />
        <Route path="/about" exact name="About" component={About} />
        <Route path="/services" exact name="Services" component={Services} />
      </Switch>
    );
  }
}

export default connect()(App);
