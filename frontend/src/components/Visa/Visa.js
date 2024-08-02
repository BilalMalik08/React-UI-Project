import React from "react";
import "./visa.css";
import VisaLeft from "./Left/VisaLeft";
import VisaRight from "./Right/VisaRight";

function Visa() {
  return (
    <div className="Visa-Container container-fluid">
      <div className="Visa-cols col-md-6">
        <VisaLeft />
      </div>
      <div className="Visa-cols col-md-6">
        <VisaRight />
      </div>
    </div>
  );
}

export default Visa;
