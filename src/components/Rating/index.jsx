import React from "react";
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
              color: rating >= star ? "#ff6060" : "#E3E3E3",
            }}
            icon={faStar}
          />
        );
      })}
    </>
  );
}

export default StarRating;
