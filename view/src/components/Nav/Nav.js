import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import propType from "prop-types";

// import { logout } from "../actions/auth";

const Nav = ({ active, user }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-0">
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
          <ul className="navbar-nav">
            <li className="nav-item px-2">
              <Link
                to="/mst"
                className={`nav-link ${active === "mst" ? "active" : ""}`}
              >
                MST
              </Link>
            </li>

            <li className="nav-item px-2">
              <Link
                to="/kruskal"
                className={`nav-link ${active === "kruskal" ? "active" : ""}`}
              >
                Kruskal
              </Link>
            </li>

            <li className="nav-item px-2">
              <Link
                to="/prim"
                className={`nav-link ${active === "prim" ? "active" : ""}`}
              >
                Prim
              </Link>
            </li>

            <li className="nav-item px-2">
              <Link
                to="/dijkstra"
                className={`nav-link ${active === "dijkstra" ? "active" : ""}`}
              >
                Dijkstra
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Nav.propType = {
  active: propType.string.isRequired,
  isAuthenticated: propType.bool.isRequired,
  user: propType.object.isRequired
  // logout: propType.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(
  mapStateToProps
  // { logout }
)(Nav);
