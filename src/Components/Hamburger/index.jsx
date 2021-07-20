import React from "react";

const Hamburger = () => {
  return (
    <>
      <button
        className="navbar-toggler burger-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="burger-bar burger-bar--1"></span>
        <span className="burger-bar burger-bar--2"></span>
        <span className="burger-bar burger-bar--3"></span>
      </button>
      <div className="collapse" id="navbarResponsive">
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
            <a className="nav-link active" href="#contact">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Hamburger;
