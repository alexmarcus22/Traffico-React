import React, { useEffect } from "react";
import NavigationComponent from "../Navigation";
import AOS from "aos";
import carImg from "../../Assets/Images/car.svg";

const HeroComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
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
      <div className="mobile" data-aos="fade-right" data-aos-offset="0">
        <img alt="" src={carImg} />
      </div>
    </section>
  );
};

export default HeroComponent;
