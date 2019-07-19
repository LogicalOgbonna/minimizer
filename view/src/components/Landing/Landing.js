// import propTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";
import "../../index.css";

const Landing = () => {
  return (
    <div>
      <Header active="home" />
      <Banner />
      {/* <Services /> */}
      <Footer isAuthenticated={false} />
    </div>
  );
};

// Landing.propTypes = {
//   isAuthenticated: propTypes.bool.isRequired
// };

// const mapStateToProps = state => ({
//   isAuthenticated: state.user.isAuthenticated
// });

export default connect()(Landing);
