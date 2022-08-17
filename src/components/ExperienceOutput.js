import React from "react";
import styles from "./CvOutputOne.module.css";

const ExperienceOutput = ({ workExperience, job, id }) => {
  return (
    <div className={styles.workExperience}>
      <div className={styles.titleAndDates}>
        <p className={styles.jobTitle}>
          <strong>{job.position ? job.position : "Job Title"}</strong>
        </p>
        <p className={styles.dates}>
          <strong>{job.company ? job.company : "Google"}</strong> |{" "}
          {job.start ? job.start : "Start"} - {job.end ? job.end : "End"}
        </p>
      </div>
      <p className={styles.jobDescription}>
        {job.description
          ? job.description
          : "A short description of some of the roles and duties performed while with the company"}
      </p>{" "}
    </div>
  );
};

export default ExperienceOutput;
