import React from "react";

const Hamburger = () => {
  return (
    <div id="burger">
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
    </div>
  );
};

export default Hamburger;
