import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <section className="copyright">
        <div className="container py-4">
          <div className="row bottom">
            <ul className="col-lg-6 links p-0">
              <li>
                <Link to="/" className="">
                  Hone
                </Link>
              </li>
              <li>
                <Link to="/about" className="">
                  About Us{" "}
                </Link>
              </li>
              <li>
                <Link to="/services" className="">
                  Services{" "}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="">
                  Contact Us{" "}
                </Link>
              </li>
            </ul>
            <div className="col-lg-6 copy-right p-0">
              <p className="">
                © 2019 CAS. All rights reserved | Design by
                <a href="http://suretradebls.com"> SureTrade NIG.</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="move-top text-right">
        <Link to="#home" className="move-top">
          <span className="fa fa-angle-up  mb-3" aria-hidden="true" />
        </Link>
      </div>
    </footer>
  );
}
