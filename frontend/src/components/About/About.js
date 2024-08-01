import React from "react";
import "./about.css";
import AboutLeft from "./Left/AboutLeft";
import AboutRight from "./Right/AboutRight";

function About() {
  return (
    <div className="About-Container container">
      <div className="About-cols col-md-7">
        <AboutLeft />
      </div>
      <div className="About-cols col-md-5">
        <AboutRight />
      </div>
    </div>
  );
}

export default About;
