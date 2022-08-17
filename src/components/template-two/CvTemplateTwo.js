import React from "react";
import styles from "./CvTemplateTwo.module.css";
import EducationOutputTwo from "./EducationOutputTwo";
import ExperienceOutputTwo from "./ExperienceOutputTwo";
import PhoneImage from "../../images/PhoneImage.png";
import MailIcon from "../../images/MailIcon.png";
import LocationIcon from "../../images/LocationIcon.png";

const CvTemplateTwo = ({
  personalInfo,
  workExperience,
  educationExperience,
}) => {
  const workExpComponents = workExperience.map((job) => {
    return (
      <ExperienceOutputTwo
        key={job.id}
        id={job.id}
        workExperience={workExperience}
        job={job}
      />
    );
  });

  const educationComponents = educationExperience.map((school) => {
    return (
      <EducationOutputTwo
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
        <div className={styles.nameOutput}>
          <h2>{personalInfo.name ? personalInfo.name : "Your Name Here"} |</h2>
          <h2 style={{ paddingLeft: "10px" }}>
            {" "}
            {personalInfo.title ? personalInfo.title : "Title"}
          </h2>
        </div>
        <div className={styles.locationNumberEmail}>
          <p className={styles.location}>
            {personalInfo.address ? personalInfo.address : "City, State"} |
          </p>
          <p>{personalInfo.phone ? personalInfo.phone : "123-456-7890"} |</p>
          <p>
            {personalInfo.email ? personalInfo.email : "SampleEmail@gmail.com"}
          </p>
        </div>
      </div>
      <h3 className={styles.experienceTitle}>Technologies</h3>
      <div className={styles.technologies}>
        {personalInfo.description
          ? personalInfo.description
          : "This is a place for a bit about myself and the tech I use"}
      </div>
      <h3 className={styles.experienceTitle}>Education</h3>
      <div className={styles.educationExperience}>{educationComponents}</div>
      <h3 className={styles.experienceTitle}>Work Experience</h3>
      <div className={styles.workExperience}>{workExpComponents}</div>
    </div>
  );
};

export default CvTemplateTwo;
