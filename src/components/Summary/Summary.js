import React from "react";
import Personal from "./Personal/Personal";
import Skills from "./Skills/Skills";
import "./Summary.css";

const Summary = () => {
  return (
    <div className="summary-container">
      <Personal />
      <Skills />
    </div>
  );
};

export default Summary;
