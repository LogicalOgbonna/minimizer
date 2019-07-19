import React from "react";
import Header from "../Header/Header";
import PageHeader from "../Page/Header";
import aboutImage from "../Slider/img/about.PNG";
import Footer from "../Footer/Footer";
export default function About() {
  return (
    <div>
      <Header active="about" />
      <PageHeader name="About Us" message="" />
      <section id="about" className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>What We Do</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                quis eligendi vel reiciendis deserunt nam praesentium illum
                fugiat ad, placeat quia, itaque, at sapiente dignissimos aliquam
                sed unde? Ratione, harum ipsum autem doloribus voluptas sint
                inventore quaerat optio consequatur reprehenderit accusantium
                saepe, expedita qui quo ipsam perferendis, ex dolore maiores.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                quis eligendi vel reiciendis deserunt nam praesentium illum
                fugiat ad, placeat quia, itaque, at sapiente dignissimos aliquam
                sed unde? Ratione, harum ipsum autem doloribus voluptas sint
                inventore quaerat optio consequatur reprehenderit accusantium
                saepe, expedita qui quo ipsam perferendis, ex dolore maiores.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={aboutImage}
                alt=""
                className="img-fluid rounded-circle d-none d-md-block about-img"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
