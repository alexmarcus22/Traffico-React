import React from "react";
import logo from "../../Assets/Images/logo.svg";
import Hamburger from "../Hamburger";

const NavigationComponent = () => {
  return (
    <nav className="navigation-component navbar navbar-expand-xl transparent d-flex col-12">
      <a className="navbar-brand mr-auto" href="#test">
        <img src={logo} alt="Logo" />
      </a>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <div className="sidebar-backdrop" v-if="isPanelOpen"></div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#howTo">
              How to
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#faq">
              FAQS
            </a>
          </li>
          <li className="nav-item">
            <a className="btn primary-button" href="#contact">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <Hamburger />
    </nav>
  );
};

export default NavigationComponent;
