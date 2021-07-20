import React, { useEffect, useState } from "react";
import FAQ_header from "../../Assets/Images/faq.svg";
import { getData } from "../../Config/api";
import AccordionComponent from "../Accordion";

const FAQ = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    setTimeout(async () => {
      const response = await getData();
      setData(response);
      setLoading(false);
    }, 300);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const makeid = (length) => {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  return (
    <section className="faq-component" id="faq">
      <div className="container">
        <div className="faq-container row">
          <div className="col-12 col-xl-4 content" data-aos="dataText">
            <h2 className="subtitle">FAQ</h2>
            <p className="description">
              Questions and Answers on Professional Traffic Permits:
            </p>
            <slot name="cardBody"></slot>
          </div>
          <div className="col-12 col-xl-8 image" data-aos="dataImg">
            <img src={FAQ_header} alt="2" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row faq-container accordion g-4">
          {loading
            ? null
            : data.map((item, index) => {
                return (
                  <AccordionComponent
                    title={item.title}
                    description={item.Message}
                    key={index}
                    target={makeid(5)}
                    id={index}
                  />
                );
              })}
        </div>
        <div className="row faq-container">
          <div className="col-md-6 offset-md-6">
            <div className="load-more">
              <button className="btn secondary-button accordion-button">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
