import React from "react";
import propTypes from "prop-types";
import "bootstrap";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
// import { logout } from "../actions/auth";

const Header = ({ active }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          CENM
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item ${active === "home" && "active"} `}>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className={`nav-item ${active === "about" && "active"} `}>
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className={`nav-item ${active === "services" && "active"} `}>
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li className={`nav-item ${active === "contact" && "active"} `}>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  active: propTypes.string.isRequired,
  user: propTypes.object
  // logout: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user.user
});
export default connect(
  mapStateToProps
  // { logout }
)(Header);
