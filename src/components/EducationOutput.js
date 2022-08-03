import React from "react";

const EducationOutput = ({ school, educationExperience, id }) => {
  return (
    <div className="education-experience">
      <div className="degree-and-uni">
        <p className="degree">
          <strong>
            {school.degree ? school.degree : "Degree/Certificate Name"}
          </strong>
        </p>
        <p className="uni">
          <strong>
            {school.university ? school.university : "University"} |{" "}
          </strong>
          {school.from ? school.from : "Start"} -{" "}
          {school.to ? school.to : "End"}
        </p>
      </div>
      <p className="edu-description">
        {school.description ? school.description : " "}
      </p>
    </div>
  );
};

export default EducationOutput;
