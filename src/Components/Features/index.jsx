import React from "react";

const Features = (props) => {
  const { titlu, description, body, img, positionText } = props;
  return (
    <section className="features-component">
      <div className="container">
        <div
          className={
            positionText === "right" ? "flex-row-reverse row" : "flex-row row"
          }
        >
          <div className="col-12 col-xl-6 content" data-aos="dataText">
            <h2 className="subtitle">{titlu}</h2>
            <p className="description">{description}</p>
            {!body ? null : (
              <div class="card card-component">
                <div class="card-body">{body}</div>
              </div>
            )}
          </div>
          <div
            className="col-12 col-xl-6 image"
            data-aos={positionText === "right" ? "fade-right" : "fade-left"}
          >
            <img src={img} alt="1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
