import React from "react";
import EducationOutput from "../EducationOutput";
import ExperienceOutput from "./ExperienceOutput";

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
        <h2>{personalInfo.name ? personalInfo.name : "name"}</h2>
        <h3>{personalInfo.title ? personalInfo.title : "title"}</h3>
        <p>{personalInfo.phone ? personalInfo.phone : "phone number"}</p>
        <p>{personalInfo.email ? personalInfo.email : "email"}</p>
        <p>{personalInfo.address ? personalInfo.address : "address"}</p>
      </div>
      <div className="description">
        {personalInfo.description
          ? personalInfo.description
          : "this is a place for a bit about why i want the job etc"}
      </div>
      <div className="work-experience">{workExpComponents}</div>
      <div className="education-experience">{educationComponents}</div>
    </div>
  );
};

export default CvOutput;
