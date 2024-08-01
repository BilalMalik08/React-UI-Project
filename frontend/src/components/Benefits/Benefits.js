import React, { useEffect, useRef } from "react";
import "./benefits.css";
import coinsImg from "../../images/coinsImg.jpg";
import taxesImg from "../../images/taxesImg.jpeg";
import profitImg from "../../images/profitImg.jpg";

function Benefits() {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          headingRef.current.classList.add("slideDown");
          cardsRef.current.forEach((card) => card.classList.add("slideUp"));
          observer.disconnect();
        }
      });
    });

    observer.observe(headingRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="Benefits-container container">
      <h1 ref={headingRef} className="Benefits-heading-1">
        TANGIBLE BENEFITS
      </h1>
      <div className="Benefits-row row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div
            className="Benefits-card card"
            ref={(el) => (cardsRef.current[0] = el)}
          >
            <img
              src={coinsImg}
              className="Benefits-img card-img-top"
              alt="..."
            />
            <div className="Benefits-card-body card-body">
              <h5 className="Benefits-card-title card-title">
                AVAILABILITY OF FINANCING
              </h5>
              <p className="Benefits-card-text card-text">
                Low-interest mortgage and interest-free instalment plan
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="Benefits-card card"
            ref={(el) => (cardsRef.current[1] = el)}
          >
            <img
              src={taxesImg}
              className="Benefits-img card-img-top"
              alt="..."
            />
            <div className="Benefits-card-body card-body">
              <h5 className="Benefits-card-title card-title">
                TAX ATTRACTIVENESS
              </h5>
              <p className="Benefits-card-text card-text">
                No tax on residential property and rental income No tax on
                residential property and rental income
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="Benefits-card card"
            ref={(el) => (cardsRef.current[2] = el)}
          >
            <img
              src={profitImg}
              className="Benefits-img card-img-top"
              alt="..."
            />
            <div className="Benefits-card-body card-body">
              <h5 className="Benefits-card-title card-title">
                HIGH PROFITABILITY
              </h5>
              <p className="Benefits-card-text card-text">
                Short-term apartment rental yields up to 12% annually, long-term
                rental - 8-10% annually
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
