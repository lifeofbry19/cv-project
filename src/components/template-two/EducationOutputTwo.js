import React from "react";
import styles from "./CvTemplateTwo.module.css";

const EducationOutput = ({ school, educationExperience, id }) => {
  return (
    <div className={styles.educationExperience}>
      <h4 className={styles.universityTitle}>
        {school.university ? school.university : "University"}
      </h4>
      <ul className={styles.degreeList}>
        <li>
          {school.from ? school.from : "Start"} -{" "}
          {school.to ? school.to : "End"}
        </li>
        <li>{school.degree ? school.degree : "Degree/Certificate Name"}</li>
        {school.description ? <li>{school.description}</li> : ""}
      </ul>
    </div>
  );
};

export default EducationOutput;
