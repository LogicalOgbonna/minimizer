import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Services() {
  return (
    <div className="">
      <Header active="services" />
      <section className="services py-5" id="services">
        <div className="container">
          <h3 className="heading mb-5">Our Services</h3>
        </div>
      </section>
      <Footer />
    </div>
  );
}
