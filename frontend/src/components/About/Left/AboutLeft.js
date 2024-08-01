import React, { useEffect, useRef, useState } from "react";
import "./aboutLeft.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function AboutLeft() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const aboutLeftRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          entry.target.classList.add("animate");
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (aboutLeftRef.current) {
      observer.observe(aboutLeftRef.current);
    }

    return () => {
      if (aboutLeftRef.current) {
        observer.unobserve(aboutLeftRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="AboutLeft-Container container" ref={aboutLeftRef}>
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
        <a href="#">
          Contact me in 1 click
          <FontAwesomeIcon className="AboutLeft-sendIcon" icon={faPaperPlane} />
        </a>
      </div>
    </div>
  );
}

export default AboutLeft;
