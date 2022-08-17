import React from "react";
import EducationOutput from "./EducationOutput";
import ExperienceOutput from "./ExperienceOutput";
import PhoneImage from "../images/PhoneImage.png";
import MailIcon from "../images/MailIcon.png";
import LocationIcon from "../images/LocationIcon.png";
import styles from "./CvOutputOne.module.css";

const CvOutput = ({ personalInfo, workExperience, educationExperience }) => {
  const workExpComponents = workExperience.map((job) => {
    return (
      <ExperienceOutput
        key={job.id}
        id={job.id}
        workExperience={workExperience}
        job={job}
      />
    );
  });

  const educationComponents = educationExperience.map((school) => {
    return (
      <EducationOutput
        key={school.id}
        id={school.id}
        educationExperience={educationExperience}
        school={school}
      />
    );
  });

  return (
    <div className={styles.cvOutput}>
      <div className={styles.cvHeader}>
        <h2 className={styles.nameOutput}>
          <strong>
            {personalInfo.name ? personalInfo.name : "Firstname Lastname"}
          </strong>
        </h2>
        <h3 className={styles.titleOutput}>
          {personalInfo.title ? personalInfo.title : "Title"}
        </h3>

        <div className={styles.icons}>
          <p className={styles.numberOutput}>
            <img src={PhoneImage}></img>
            {personalInfo.phone ? personalInfo.phone : "123-456-7890"}
          </p>
          <p className={styles.emailOutput}>
            <img src={MailIcon}></img>
            {personalInfo.email ? personalInfo.email : "SampleEmail@gmail.com"}
          </p>
          <p className={styles.locationOutput}>
            <img src={LocationIcon}></img>
            {personalInfo.address ? personalInfo.address : "City, State"}
          </p>
        </div>
      </div>
      <div className={styles.description}>
        {personalInfo.description
          ? personalInfo.description
          : "this is a place for a bit about why i want the job etc"}
      </div>
      <h3 className={styles.experienceTitle}>Work Experience</h3>
      <div className={styles.workExperience}>{workExpComponents}</div>
      <h3 className={styles.experienceTitle}>Education</h3>
      <div className={styles.educationExperience}>{educationComponents}</div>
    </div>
  );
};

export default CvOutput;
