import React, { useState } from "react";

const AccordionComponent = (props) => {
  const { title, description, target, id } = props;
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="col-12 col-md-6 accordion accordion-component" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id={id}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#" + target}
            aria-expanded="false"
            aria-controls={target}
          >
            {title}
          </button>
        </h2>
        <div
          id={target}
          className="accordion-collapse collapse"
          aria-labelledby={id}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;
