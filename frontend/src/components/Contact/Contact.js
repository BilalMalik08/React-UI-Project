import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="Contact-Container container-fluid">
      <div className="Contact-Sub-Container container">
        <div className="Contact-heading">
          <h1 className="Contact-heading Contact-heading-1">Andrii Sirenko</h1>
          <h6 className="Contact-heading Contact-heading-6">
            With me, you will receive all the real estate services you need and
            even more because I will act as a guide for you to the world of big
            money in the Middle East business capital.
          </h6>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="Contact-card card h-100">
              <div class="Contact-card-body card-body">
                <h5 class="Contact-card-title card-title">Get in touch</h5>
                <span className="Contact-icons">
                  <FontAwesomeIcon className="fa-icon" icon={faFacebookF} />
                  <FontAwesomeIcon className="fa-icon" icon={faPhoneAlt} />
                  <FontAwesomeIcon className="fa-icon" icon={faInstagram} />
                </span>
                <span className="Contact-info">
                  <FontAwesomeIcon className="fa-icon" icon={faPhoneAlt} /> +971
                  56 134 88 64
                </span>
                <span className="Contact-info">
                  <FontAwesomeIcon className="fa-icon" icon={faEnvelope} />{" "}
                  andrii.sirenko@mpd.ae
                </span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="Contact-card card h-100">
              <div class="Contact-card-body card-body">
                <ul className="Contact-card-ul">
                  <li className="Contact-card-li">
                    Assistance in buying, selling, or renting
                  </li>
                  <li className="Contact-card-li">
                    Consulting in commercial and residential real estate
                  </li>
                  <li className="Contact-card-li">
                    Assistance in obtaining a resident visa
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="Contact-card card h-100">
              <div class="Contact-card-body card-body">
                <ul className="Contact-card-ul">
                  <li className="Contact-card-li">From $ 250.000</li>
                  <li className="Contact-card-li">
                    47 current residential complexes
                  </li>
                  <li className="Contact-card-li">
                    Top 7 real estate developers in the UAE
                  </li>
                  <li className="Contact-card-li">
                    Apartments, condos, villas and townhouses
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
