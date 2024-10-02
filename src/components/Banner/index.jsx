import React from "react";
import "./banner.scss";

function Banner({ children, isLabel, backgroundImage }) {
  return (
    <header
      className={`hero ${isLabel ? "with-label" : ""}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {children}
    </header>
  );
}
export default Banner;
