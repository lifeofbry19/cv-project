import React from "react";

const AddExperienceButton = ({
  educationExperience,
  setEducationExperience,
}) => {
  function addEducation(e) {
    e.preventDefault();
    const newId = educationExperience.length;
    setEducationExperience((prevVal) => {
      return [
        ...prevVal,
        {
          university: "",
          location: "",
          degree: "",
          from: "",
          to: "",
          id: newId,
        },
      ];
    });
  }
  return <button onClick={addEducation}>Add</button>;
};

export default AddExperienceButton;
