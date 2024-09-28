import React, { useState } from "react";
import "../../styles/accordion.scss";

function Accordion({ accoValue, accoType }) {
  const [isActive, setIsActive] = useState(false);

  const type =
    accoType === "description" ? (
      <div className="accordion-content">
        <button
          className={`accordion ${isActive ? "active" : ""}`}
          onClick={() => setIsActive(!isActive)}
        >
          Description
        </button>

        {isActive && (
          <div className="panel">
            {accoValue.map(({ index, description }) => (
              <p key={`${description}-${index}`}>{description}</p>
            ))}
          </div>
        )}
      </div>
    ) : (
      <div className="accordion-content">
        <button
          className={`accordion ${isActive ? "active" : ""}`}
          onClick={() => setIsActive(!isActive)}
        >
          Équipements
        </button>
        {isActive && (
          <div className="panel">
            <ul>
              {accoValue.map(({ index, equipments }) => (
                <li key={`${equipments}-${index}`}>{equipments}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );

  return <>{type}</>;
}
export default Accordion;
