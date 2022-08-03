import React from "react";

const ExperienceOutput = ({ workExperience, job, id }) => {
  return (
    <div className="work-experience">
      <div className="title-and-dates">
        <p className="job-title">
          <strong>{job.position ? job.position : "Job Title"}</strong>
        </p>
        <p className="dates">
          <strong>{job.company ? job.company : "Google"}</strong> |{" "}
          {job.start ? job.start : "Start"} - {job.end ? job.end : "End"}
        </p>
      </div>
      <p className="job-description">
        {job.description
          ? job.description
          : "A short description of some of the roles and duties performed while with the company"}
      </p>{" "}
    </div>
  );
};

export default ExperienceOutput;
