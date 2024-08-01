import React, { useEffect, useRef, useState } from "react";
import "./masterCard.css";
import dubaiImg from "../../images/dubaiImg.jpg";

function MasterCard() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          entry.target.classList.add("animate-card");
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="MasterCard-container container">
      <div className="MasterCard-card card" ref={cardRef}>
        <img src={dubaiImg} className="MasterCard-img card-img-top" alt="..." />
        <div className="MasterCard-body card-body">
          <p className="MasterCard-text card-text">
            Dubai has long been a symbol of luxury and big money. This city is
            not just the capital of the Middle East business but also a
            promising place for real estate buyers. Dubai is a center of
            culture, tourism, and investment.
          </p>{" "}
          <p className="MasterCard-text card-text">
            A huge selection of real estate objects includes private and
            commercial properties.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MasterCard;
