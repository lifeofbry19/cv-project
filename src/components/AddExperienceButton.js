import React from "react";

const AddExperienceButton = ({ workExperience, setWorkExperience }) => {
  function addExperience(e) {
    e.preventDefault();
    const newId = workExperience.length;
    setWorkExperience((prevVal) => {
      return [
        ...prevVal,
        {
          position: "",
          company: "",
          location: "",
          from: "",
          to: "",
          id: newId,
        },
      ];
    });
  }
  return <button onClick={addExperience}>Add</button>;
};

export default AddExperienceButton;
