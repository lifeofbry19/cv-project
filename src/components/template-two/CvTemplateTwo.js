import React from "react";
import styles from "./CvTemplateTwo.css";
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
    <div className="cv-output">
      <div className="cv-header">
        <div className="name-output">
          <h2>{personalInfo.name ? personalInfo.name : "Your Name Here"} |</h2>
          <h2 style={{ paddingLeft: "10px" }}>
            {" "}
            {personalInfo.title ? personalInfo.title : "Title"}
          </h2>
        </div>
        <div className="location-number-email">
          <p className="location">
            {personalInfo.address ? personalInfo.address : "City, State"} |
          </p>
          <p className="number">
            {personalInfo.phone ? personalInfo.phone : "123-456-7890"} |
          </p>
          <p className="email">
            {personalInfo.email ? personalInfo.email : "SampleEmail@gmail.com"}
          </p>
        </div>
      </div>
      <h3 className="experience-title">Technologies</h3>
      <div className="technologies">
        {personalInfo.description
          ? personalInfo.description
          : "This is a place for a bit about myself and the tech I use"}
      </div>
      <h3 className="experience-title">Education</h3>
      <div className="education-experience">{educationComponents}</div>
      <h3 className="experience-title">Work Experience</h3>
      <div className="work-experience">{workExpComponents}</div>
    </div>
  );
};

export default CvTemplateTwo;
