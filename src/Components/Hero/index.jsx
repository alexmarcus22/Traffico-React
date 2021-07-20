import React from "react";
import NavigationComponent from "../Navigation";

const HeroComponent = () => {
  return (
    <section className="hero-component">
      <div className="container">
        <div className="row">
          <NavigationComponent />
          <div className="hero-container col-12 col-md-7">
            <h1 className="title">Your awesome traffic permit consultant.</h1>
            <button className="btn primary-button">Get Started</button>
          </div>
        </div>
      </div>
      {/* <div className="mobile" data-aos="fade-right" data-aos-offset="0">
        <img alt="" srcset="" />
      </div> */}
    </section>
  );
};

export default HeroComponent;
