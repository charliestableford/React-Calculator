import React from "react";

const ResultsComponent = ({ result }) => (
  <div className="wrapper">
    <div className="leftRes"></div>
    <div className="result">
      <p>{result}</p>
    </div>
  </div>
);

export default ResultsComponent;
