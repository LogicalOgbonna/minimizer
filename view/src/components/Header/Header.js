import React from "react";
import propTypes from "prop-types";
import "bootstrap";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

import { Link } from "react-router-dom";
// import { logout } from "../actions/auth";

const Header = ({ active, isAuthenticated, logout }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Minimizer
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
            {!isAuthenticated ? (
              <React.Fragment>
                <li
                  className={`nav-item ${active === "register" && "active"} `}
                >
                  <Link to="/register" className="nav-link">
                    Sign up
                  </Link>
                </li>
                <li className={`nav-item ${active === "login" && "active"} `}>
                  <Link to="/login" className="nav-link">
                    Sign in
                  </Link>
                </li>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <li className={`nav-item ${active === "login" && "active"} `}>
                  <Link to="/dashboard" className="nav-link btn btn-secondary">
                    Dashboard
                  </Link>
                </li>
                <li className={`nav-item ${active === "login" && "active"} `}>
                  <button
                    className="nav-link btn btn-secondary ml-2"
                    onClick={() => logout()}
                    type="submit"
                  >
                    LOGOUT
                  </button>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  active: propTypes.string.isRequired,
  user: propTypes.object,
  logout: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user.user
});
export default connect(
  mapStateToProps,
  { logout }
)(Header);
