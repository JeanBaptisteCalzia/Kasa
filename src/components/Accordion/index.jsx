import React, { useRef, useState } from "react";
import "./accordion.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const AccordionItem = ({
  title,
  description,
  equipments,
  isList,
  accoTitle,
}) => {
  const contentHeight = useRef();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-wrapper">
      <button
        className={`title ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {accoTitle ? (
          <>
            <p className="title-content">{accoTitle}</p>
            <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
          </>
        ) : (
          <>
            <p className="title-content">{title}</p>
            <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
          </>
        )}
      </button>

      <div
        ref={contentHeight}
        className="description"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        {isList ? (
          <ul className="equipment-content">
            {equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="description-content">{description}</p>
        )}
      </div>
    </div>
  );
};

function Accordion({ accoTitle, accoValue, isList = false }) {
  return (
    <div className="accordion-container">
      {accoValue.map((item, index) => (
        <AccordionItem
          key={`${item}-${index}`}
          title={item.title}
          accoTitle={accoTitle}
          description={item.description}
          equipments={item.equipments}
          isList={isList}
        />
      ))}
    </div>
  );
}

export default Accordion;
