import React from "react";
import "./aboutRight.css";
import dummyImg from "../../../images/dummyImg.png";

function AboutRight() {
  return (
    <div className="AboutRight-Container container">
      <img className="AboutRight-img" src={dummyImg} alt="Image" />
    </div>
  );
}

export default AboutRight;
