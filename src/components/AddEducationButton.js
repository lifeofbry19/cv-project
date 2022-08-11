import React from "react";
import { uuid } from "uuidv4";

const AddExperienceButton = ({
  educationExperience,
  setEducationExperience,
}) => {
  function addEducation(e) {
    e.preventDefault();
    setEducationExperience((prevVal) => {
      return [
        ...prevVal,
        {
          university: "",
          location: "",
          degree: "",
          from: "",
          to: "",
          id: Math.random() * 10000,
        },
      ];
    });
  }
  return <button onClick={addEducation}>Add</button>;
};

export default AddExperienceButton;
