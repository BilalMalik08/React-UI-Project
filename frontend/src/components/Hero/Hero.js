import React, { useEffect, useRef, useState } from "react";
import "./hero.css";

function Hero() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const heroRef = useRef(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="Hero-Container container-fluid">
      <div className="Hero-Sub-Container" ref={heroRef}>
        <h1 className="Hero-heading Hero-heading-1">INVESTMENTS</h1>
        <h6 className="Hero-heading Hero-heading-6">DUBAI</h6>
        <button className="Hero-btn">Learn More</button>
      </div>
    </div>
  );
}

export default Hero;
