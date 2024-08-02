import React, { useEffect, useRef, useState } from "react";
import "./visaLeft.css";
import visaImg from "../../../images/visaImg.png";

function VisaLeft() {
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
    <div className="VisaLeft-Container container" ref={aboutRightRef}>
      <img className="VisaLeft-img" src={visaImg} alt="img" />
    </div>
  );
}

export default VisaLeft;
