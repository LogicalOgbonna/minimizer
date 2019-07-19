import React, { Component } from "react";
import PageHeader from "../Page/Header";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import student from "../Slider/img/person1.jpg";
import supervisor from "../Slider/img/person2.jpg";
class Contact extends Component {
  render() {
    return (
      <div>
        <Header active="contact" />
        <PageHeader name="Contact Us" message="Leave Us A Message" />
        <section id="contact" className="py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card p-3">
                  <div className="card-body ">
                    <h4>Get In Touch</h4>
                    <p>Talk to Us Directly</p>
                    <h4>Address:</h4>
                    <p>University of Nigeria, Nsukka, Enugu State</p>
                    <h4>Email:</h4>
                    <p>arinze.ogbonna.198717@unn.edu.ng</p>
                    <h4>Phone:</h4>
                    <p>(+234) 8137173400</p>
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <div className="card p-4">
                  <div className="card-body">
                    <h3 className="text-center">
                      Please fill out this form to contact us
                    </h3>
                    <hr />
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="First Name"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Last Name"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            placeholder="Email"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Phone Number"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            placeholder="Message"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="submit"
                            value="Submit"
                            className="btn btn-outline-danger btn-block"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="staff" className="py-5 text-center bg-dark text-white">
          <div className="container">
            <h1>Our Staff</h1>
            <hr />
            <div className="row">
              <div className="col-md-6">
                <img
                  src={student}
                  alt=""
                  className="img-fluid rounded-circle mb-2"
                />
                <h4>Ogbonna Arinze</h4>
                <small>Student (Supervisee)</small>
              </div>
              <div className="col-md-6">
                <img
                  src={supervisor}
                  alt=""
                  className="img-fluid rounded-circle mb-2"
                />
                <h4>Mr. Ukekwe Sunday</h4>
                <small>Lecturer (Supervisor)</small>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Contact;
