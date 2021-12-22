import React from "react";
import purple_button from "../assets/SVG/purple_button.svg";

const PurpleButton = ({ text, children, size }) => {
  return (
    <div className={`aboutBtn ${size === "sm" && "smallBtn"}`}>
      <img alt="purple button" src={purple_button} />
      <div className="aboutBtn__group">
        <div className="aboutBtn__icon">{children}</div>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default PurpleButton;
