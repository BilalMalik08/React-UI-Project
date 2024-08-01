import React from "react";
import "./about.css";
import AboutLeft from "./Left/AboutLeft";

function About() {
  return (
    <div className="About-Container container-fluid">
      <div className="About-cols cols col-md-7">
        <AboutLeft />
      </div>
      <div className="About-cols cols col-md-5"></div>
    </div>
  );
}

export default About;
