import React, { useState } from "react";
import "../../styles/slideshow.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow-container">
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="slideshow-image"
      />
      <div className="slideshow-buttons">
        <button onClick={goToPreviousSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button onClick={goToNextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
