import React, { useEffect, useRef } from "react";
import "./projects.css";
import BespokeVillasImg from "../../images/BespokeVillasImg.jpg";
import LuxuryBrandedResidencesImg from "../../images/LuxuryBrandedResidencesImg.jpg";
import PrivateBeachResidencesImg from "../../images/PrivateBeachResidencesImg.jpg";

function Projects() {
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
    <div className="Projects-container container">
      <h1 ref={headingRef} className="Projects-heading-1">
        PROJECTS
      </h1>
      <div className="Projects-row row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div
            className="Projects-card card"
            ref={(el) => (cardsRef.current[0] = el)}
          >
            <img
              src={BespokeVillasImg}
              className="Projects-img card-img-top"
              alt="..."
            />
            <div className="Projects-card-body card-body">
              <h5 className="Projects-card-title card-title">Bespoke Villas</h5>
              <p className="Projects-card-text card-text">From 2.200.000 USD</p>
              <p className="Projects-card-text card-text">From 8,000.000 AED</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="Projects-card card"
            ref={(el) => (cardsRef.current[1] = el)}
          >
            <img
              src={LuxuryBrandedResidencesImg}
              className="Projects-img card-img-top"
              alt="..."
            />
            <div className="Projects-card-body card-body">
              <h5 className="Projects-card-title card-title">
                Luxury Branded Residences
              </h5>
              <p className="Projects-card-text card-text">From 1.500.000 USD</p>{" "}
              <p className="Projects-card-text card-text">From 5,000.000 AED</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="Projects-card card"
            ref={(el) => (cardsRef.current[2] = el)}
          >
            <img
              src={PrivateBeachResidencesImg}
              className="Projects-img card-img-top"
              alt="..."
            />
            <div className="Projects-card-body card-body">
              <h5 className="Projects-card-title card-title">
                Private beach Residences
              </h5>
              <p className="Projects-card-text card-text">From 700.000 USD</p>{" "}
              <p className="Projects-card-text card-text">From 2,500.000 AED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
