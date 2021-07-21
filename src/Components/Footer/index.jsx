import React from "react";
import secondMobile from "../../Assets/Images/secondmobil.svg";
import footer2 from "../../Assets/Images/footer2.svg";
import footer3 from "../../Assets/Images/footer3.svg";
import lineSvg from "../../Assets/Images/line-footer.svg";
import footerLogo from "../../Assets/Images/logo.svg";
import facebook from "../../Assets/Images/facebook.svg";
import twitter from "../../Assets/Images/twitter.svg";
import instagram from "../../Assets/Images/instagram.svg";

const FooterComponent = ({ contact }) => {
  return (
    <section className="footer-component" id="footer">
      {contact}
      <svg className="svg">
        <clipPath id="clipPathFooter" clipPathUnits="objectBoundingBox">
          <path d="M0.925,0.001 H-0.004 V1 H0.996 V0.152 C0.996,0.069,0.964,0.001,0.925,0.001"></path>
        </clipPath>
      </svg>
      <div className="footer-clipped"></div>
      <div id="secondMobile" data-aos="fade-right">
        <img src={secondMobile} alt="secondMobile" />
      </div>
      <div id="footerSVG">
        <img src={footer2} alt="footer2 img" />
      </div>
      <div id="footerSVG2">
        <img src={footer3} alt="footer3 img" />
      </div>
      <div className="line-svg">
        <img src={lineSvg} alt="line" />
      </div>
      <div className="container">
        <div className="row footer-container footer-links flex-column-reverse flex-md-row">
          <div className="col-12 col-xl-5">
            <a className="" href="/">
              <img src={footerLogo} alt="logo" />
            </a>
          </div>
          <div className="col-12 col-xl-7">
            <ul className="list-inline flex-xl-row flex-column">
              <li className="list-inline-item">
                <a href="#about">About</a>
              </li>
              <li className="list-inline-item">
                <a href="#howTo">How To</a>
              </li>
              <li className="list-inline-item">
                <a href="#faq">FAQS </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row footer-container footer-copyright">
          <div className="col-6 d-flex">
            <span className="copyright align-self-center">
              {" "}
              Copyright @ 2021{" "}
            </span>
          </div>
          <div className="col-6">
            <ul className="list-inline social-links">
              <li>
                <a href="#facebook">
                  <img src={facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="#instagram">
                  <img src={instagram} alt="instagram" />
                </a>
              </li>
              <li>
                <a href="#twitter">
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterComponent;
