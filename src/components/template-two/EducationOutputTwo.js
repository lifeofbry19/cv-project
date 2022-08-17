import React from "react";
import styles from "./CvTemplateTwo.css";

const EducationOutput = ({ school, educationExperience, id }) => {
  return (
    <div className="education-experience">
      <h4 className="university-title">
        {school.university ? school.university : "University"}
      </h4>
      <ul className="degree-list">
        <li>
          {school.from ? school.from : "Start"} -{" "}
          {school.to ? school.to : "End"}
        </li>
        <li>{school.degree ? school.degree : "Degree/Certificate Name"}</li>
        {school.description !== "" ? <li>{school.description}</li> : ""}
      </ul>
    </div>
  );
};

export default EducationOutput;
