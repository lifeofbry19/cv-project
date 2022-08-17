import React from "react";
import styles from "./CvTemplateTwo.module.css";

const ExperienceOutput = ({ workExperience, job, id }) => {
  return (
    <div className={styles.workExperience}>
      <div className={styles.dates}>
        {job.start ? job.start : "Start"} - {job.end ? job.end : "End"}
      </div>
      <div className={styles.jobTitle}>
        <strong>
          {job.position ? job.position : "Job Title"} |{" "}
          {job.company ? job.company : "Company"}
        </strong>
      </div>
      <div className={styles.jobDescription}>
        {job.description
          ? job.description
          : "A short description of some of the roles and duties performed while with the company"}
      </div>
    </div>
  );
};

export default ExperienceOutput;
