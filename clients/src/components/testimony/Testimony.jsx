import React from "react";
import "./Testimony.css";

const Testimony = ({ name, text, imgSrc }) => {
  return (
    <div className="testimony">
      <img src={imgSrc} alt={name} className="testimony-img" />
      <h3>{name}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Testimony;
