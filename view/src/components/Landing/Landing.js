// import propTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import propTypes from "prop-types";
// import Services from "../Services/Services";
import Footer from "../Footer/Footer";
import "../../index.css";

const Landing = ({ isAuthenticated }) => {
  return (
    <div>
      <Header active="home" isAuthenticated={isAuthenticated} />
      <Banner />
      {/* <Services /> */}
      <Footer isAuthenticated={isAuthenticated} />
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
