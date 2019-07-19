import React from "react";
import { Link } from "react-router-dom";
import Slider from "../Slider/Slider";
import data from "../data/graph data.xlsx";
import yourGraph from "../Slider/img/your_graph.PNG";
import minimizedGraph from "../Slider/img/minimized_graph.PNG";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner" id="home">
      <Slider />
      <section id="home-icons" className="py-5 container">
        <div className="row">
          <div className="col-md-4 mb-4 text-center">
            <i className="fas fa-download fa-3x mb-2" />
            <h3>Download Template</h3>
            <p>
              Download sample template (excel file) and enter the graph you want
              to minimize
            </p>
          </div>
          <div className="col-md-4 mb-4 text-center">
            <i className="fas fa-check fa-3x mb-2" />
            <h3>One Click</h3>
            <p>
              Click on Minimize button to see your graph transformed to the
              bearest cost effective network
            </p>
          </div>
          <div className="col-md-4 mb-4 text-center">
            <i className="fas fa-eye fa-3x mb-2" />
            <h3>View</h3>
            <p>
              You Can see your cost effective graph immediately you press the
              Minimize button
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <a
              href={data}
              style={{ marginLeft: "25%" }}
              className="btn btn-secondary"
            >
              Download Template
            </a>
          </div>
          <div className="col-md-4" />
        </div>
      </section>

      <section id="home-heading" className="p-5">
        <div className="dark-overlay">
          <div className="row">
            <div className="col">
              <div className="container pt-5">
                <h1>Are you ready to get started?</h1>
                <p className="d-none d-md-block">Snap Shots of your flow</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="info" className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <h3 className="text-center">Your Graph</h3>
              <p className="text-justify">
                Your inputed graph will be ploted not by coordinates but by
                their respective distances
              </p>
              <Link
                to="/mst"
                style={{ float: "right" }}
                className="btn btn-outline-danger btn-lg text-center"
              >
                Try Now
              </Link>
            </div>

            <div className="col-md-6">
              <img src={yourGraph} alt="" className="img-fluid" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <img src={minimizedGraph} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 align-self-center">
              <h3 className="text-center">Cost Effective Graph</h3>
              <p className="text-justify">
                The cost effective graph which is a subset of your inputed graph
                will be ploted with respect to the postitions of each node
                supplied in the inputed graph
              </p>
              <Link
                to="/mst"
                className="btn btn-outline-danger btn-lg text-center"
              >
                Try Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
