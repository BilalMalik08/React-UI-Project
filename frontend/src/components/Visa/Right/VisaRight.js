import React, { useEffect, useRef, useState } from "react";
import "./visaRight.css";
import visaImg2 from "../../../images/visaImg2.png";

function VisaRight() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const aboutRightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          entry.target.classList.add("animate-right");
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (aboutRightRef.current) {
      observer.observe(aboutRightRef.current);
    }

    return () => {
      if (aboutRightRef.current) {
        observer.unobserve(aboutRightRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="VisaRight-Container container" ref={aboutRightRef}>
      <img className="VisaRight-img" src={visaImg2} alt="img" />
    </div>
  );
}

export default VisaRight;
