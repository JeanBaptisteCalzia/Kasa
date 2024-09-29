import React from "react";
import "../../styles/slideshow.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function StarRating({ rating }) {
  return (
    <>
      {[1, 2, 3, 4, 5].map((star, index) => {
        return (
          <FontAwesomeIcon
            key={`${star}-${index}`}
            style={{
              color: rating >= star ? "gold" : "gray",
              fontSize: `35px`,
            }}
            icon={faStar}
          />
        );
      })}
    </>
  );
}

export default StarRating;
