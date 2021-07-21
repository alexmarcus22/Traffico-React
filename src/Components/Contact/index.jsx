import React from "react";
import Arrow from "../../Assets/Images/union.svg";

const ContactComponent = () => {
  return (
    <section className="contact-component" id="contact">
      <div className="container">
        <div className="row contact-container">
          <div className="col-12 col-xl-5">
            <div className="card card-component">
              <div className="card-body">
                We provide traffic management consultants so you get started
                quickly, contact us for a quote today! s
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-7">
            <div className="card-contact" data-aos="dataContactText">
              <div className="card-body">
                <form className="contact-form" method="GET">
                  <div className="form-group">
                    <label htmlFor="name1">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name1"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="emailAdress">Email Adress</label>
                    <input
                      type="email"
                      className="form-control"
                      id="emailAdress"
                      placeholder="Your email address"
                    />
                  </div>
                  <button type="submit " className="btn primary-button">
                    Get Started
                    <img src={Arrow} alt="" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
