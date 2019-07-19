import React from "react";
import { Link } from "react-router-dom";
import "./Slider.css";
export default function Slider() {
  return (
    <section id="showcase">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active" />
          <li data-target="#myCarousel" data-slide-to="1" />
          <li data-target="#myCarousel" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item carousel-img-1 active">
            <div className="container">
              <div className="carousel-caption d-none d-sm-block  mb-5">
                <h1 className="display-3">Kruskal's Algorithm</h1>
                <p className="text-white">
                  Kruskal's Algorithm is one of the oldest MST Algorithms, it
                  ...
                </p>
                <Link to="/mst" className="btn btn-secondary btn-lg">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <div className="carousel-item carousel-img-2">
            <div className="container">
              <div className="carousel-caption d-none d-sm-block  mb-5">
                <h1 className="display-3">Prim's Algorithm</h1>
                <p className="text-white">
                  Prim's Algorithm solves MST problems in...
                </p>
                <Link to="/mst" className="btn btn-secondary btn-lg">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <div className="carousel-item carousel-img-3">
            <div className="container">
              <div className="carousel-caption d-none d-sm-block  mb-5">
                <h1 className="display-3">Minimize That Graph</h1>
                <p className="text-white">
                  Minimize that Graph Now. Water Supply | Electricity Grid |
                  Road Network e.t.c
                </p>
                <Link to="/kruskal" className="btn btn-secondary btn-lg">
                  Start Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Link
          to="#myCarousel"
          data-slide="prev"
          className="carousel-control-prev"
        >
          <span className="carousel-control-prev-icon" />
        </Link>
        <Link
          to="#myCarousel"
          data-slide="next"
          className="carousel-control-next"
        >
          <span className="carousel-control-next-icon" />
        </Link>
      </div>
    </section>
  );
}
