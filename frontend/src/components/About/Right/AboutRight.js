import React, { useEffect, useRef, useState } from "react";
import "./aboutRight.css";
import dummyImg from "../../../images/dummyImg.png";

function AboutRight() {
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
    <div className="AboutRight-Container container" ref={aboutRightRef}>
      <img className="AboutRight-img" src={dummyImg} alt="img" />
    </div>
  );
}

export default AboutRight;
