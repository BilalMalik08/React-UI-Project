import React from "react";
import "./aboutLeft.css";

function AboutLeft() {
  return (
    <div className="AboutLeft-Container container">
      <div className="About-heading">
        <h1 className="About-heading About-heading-1">ANDRII</h1>
        <h1 className="About-heading About-heading-1">SIRENKO</h1>
      </div>
      <ul className="About-ul">
        <li className="About-li">
          Serial entrepreneur in Real estate, IT, design, and events in Dubai.
        </li>
        <li className="About-li">
          Expert in affiliate marketing and finding a resource through
          communications and connections.
        </li>
        <li className="About-li">Business consulting in Dubai.</li>
      </ul>
      <div className="About-link">Contact me in 1 click</div>
    </div>
  );
}

export default AboutLeft;
