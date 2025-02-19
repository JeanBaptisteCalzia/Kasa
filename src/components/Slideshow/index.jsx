import React, { useState } from "react";
import "./slideshow.scss";
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
      <ul>
        {pictures.map((src, index) => (
          <li
            key={index}
            className="slideshow-image"
            style={
              index === currentIndex
                ? {
                    opacity: "100",
                  }
                : {
                    opacity: "0",
                  }
            }
          >
            <img src={src} alt={`Slide ${index + 1}`} />
          </li>
        ))}
      </ul>

      <div></div>

      {pictures.length > 1 ? (
        <>
          <span>
            {currentIndex + 1} / {pictures.length}
          </span>
          <div className="slideshow-buttons">
            <button onClick={goToPreviousSlide}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button onClick={goToNextSlide}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Slideshow;
