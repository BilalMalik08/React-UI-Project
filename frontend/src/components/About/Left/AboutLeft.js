import React from "react";
import "./aboutLeft.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function AboutLeft() {
  return (
    <div className="AboutLeft-Container container">
      <div className="AboutLeft-heading">
        <h1 className="AboutLeft-heading AboutLeft-heading-1">ANDRII</h1>
        <h1 className="AboutLeft-heading AboutLeft-heading-1">SIRENKO</h1>
      </div>
      <ul className="AboutLeft-ul">
        <li className="AboutLeft-li">
          Serial entrepreneur in Real estate, IT, design, and events in Dubai.
        </li>
        <li className="AboutLeft-li">
          Expert in affiliate marketing and finding a resource through
          communications and connections.
        </li>
        <li className="AboutLeft-li">Business consulting in Dubai.</li>
      </ul>
      <div className="AboutLeft-link">
        <a href="">
          Contact me in 1 click
          <FontAwesomeIcon className="AboutLeft-sendIcon" icon={faPaperPlane} />
        </a>
      </div>
    </div>
  );
}

export default AboutLeft;
