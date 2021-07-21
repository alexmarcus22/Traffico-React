import React, { useEffect, useState } from "react";
import FAQ_header from "../../Assets/Images/faq.svg";
import { getData } from "../../Config/api";
import AccordionComponent from "../Accordion";

const FAQ = ({ id }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(0);

  const fetchData = () => {
    setLoading(true);
    setTimeout(async () => {
      const response = await getData();
      setData(response);
      setLoading(false);
      setLimit(4);
    }, 300);
  };

  const raiseLimit = () => setLimit(limit + 2);

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
    <section className="faq-component" id={id}>
      <div className="container">
        <div className="faq-container row">
          <div className="col-12 col-xl-4 content" data-aos="dataText">
            <h2 className="subtitle">FAQ</h2>
            <p className="description">
              Questions and Answers on Professional Traffic Permits:
            </p>
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
                if (index < limit)
                  return (
                    <AccordionComponent
                      title={item.title}
                      description={item.Message}
                      key={index}
                      target={makeid(5)}
                      id={index}
                    />
                  );
                return null;
              })}
        </div>
        <div className="row faq-container">
          <div className="col-md-6 offset-md-6">
            <div className="load-more">
              <button
                className="btn secondary-button accordion-button"
                onClick={raiseLimit}
              >
                <div className="accordion-title">Load More</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
