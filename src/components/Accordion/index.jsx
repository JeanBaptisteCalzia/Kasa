import React, { useRef, useState } from "react";
import "../../styles/accordion.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const AccordionItem = ({ title, description, equipments, isOpen, onClick }) => {
  const contentHeight = useRef();

  return (
    <div className="accordion-wrapper">
      <button className={`title ${isOpen ? "active" : ""}`} onClick={onClick}>
        <p className="title-content">{title}</p>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
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
        <p className="description-content">{description}</p>

        {equipments ? (
          <ul className="equipment-content">
            <li>{equipments}</li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

const Accordion = ({ accoType, accoValue }) => {
  const [activeIndex, setActiveIndex] = useState(false);
  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? false : index));
  };

  switch (accoType) {
    case "description":
      return (
        <div className="accordion-container">
          {accoValue.map((item, index) => (
            <AccordionItem
              key={index}
              title={"Description"}
              description={item.description}
              isOpen={activeIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      );
    case "equipments":
      return (
        <div className="accordion-container">
          {accoValue.map((item, index) => (
            <AccordionItem
              key={index}
              title={"Équipements"}
              equipments={item.equipments}
              isOpen={activeIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      );
    case "about":
      return (
        <div className="accordion-container">
          {accoValue.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              description={item.description}
              isOpen={activeIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      );
    default:
      return <div className="accordion-container">No data</div>;
  }
};

export default Accordion;
