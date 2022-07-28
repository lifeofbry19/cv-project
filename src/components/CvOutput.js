import React from "react";

const CvOutput = () => {
  return (
    <div className="cv-output">
      <div className="cv-header">
        <h2>firstname lastname</h2>
        <h3>title</h3>
        <p>number</p>
        <p>email</p>
        <p>location</p>
      </div>
      <div className="description">
        this is a place for an about me section, why i want the job etc
      </div>
      <div className="work-experience">my previous companies, title, etc</div>
      <div className="education-experience">my degrees, name, etc</div>
    </div>
  );
};

export default CvOutput;
