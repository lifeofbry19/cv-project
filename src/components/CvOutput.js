import React from "react";
import EducationOutput from "./EducationOutput";
import ExperienceOutput from "./ExperienceOutput";
import PhoneImage from "../images/PhoneImage.png";
import MailIcon from "../images/MailIcon.png";
import LocationIcon from "../images/LocationIcon.png";

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
    <div className="cv-output">
      <div className="cv-header">
        <h2 className="name-output">
          <strong>
            {personalInfo.name ? personalInfo.name : "Firstname Lastname"}
          </strong>
        </h2>
        <h3 className="title-output">
          {personalInfo.title ? personalInfo.title : "Title"}
        </h3>

        <div className="icons">
          <p className="number-output">
            <img src={PhoneImage}></img>
            {personalInfo.phone ? personalInfo.phone : "123-456-7890"}
          </p>
          <p className="email-output">
            <img src={MailIcon}></img>
            {personalInfo.email ? personalInfo.email : "SampleEmail@gmail.com"}
          </p>
          <p className="location-output">
            <img src={LocationIcon}></img>
            {personalInfo.address ? personalInfo.address : "LA, California"}
          </p>
        </div>
      </div>
      <div className="description">
        {personalInfo.description
          ? personalInfo.description
          : "this is a place for a bit about why i want the job etc"}
      </div>
      <h3 className="experience-title">Work Experience</h3>
      <div className="work-experience">{workExpComponents}</div>
      <h3 className="experience-title">Education</h3>
      <div className="education-experience">{educationComponents}</div>
    </div>
  );
};

export default CvOutput;
