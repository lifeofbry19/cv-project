import React from "react";

const EducationForm = () => {
  return (
    <div className="education-form">
      <label htmlFor="Experience">Education</label>
      <input type="text" name="" id="" placeholder="University" />
      <input type="text" name="" id="" placeholder="Location" />
      <input type="text" name="" id="" placeholder="Degree" />
      <label htmlFor="school-start">From</label>
      <input type="date" name="school-start" id="" />
      <label htmlFor="school-end">To</label>
      <input type="date" name="school-end" id="" />
      <div className="buttons">
        <button>Add</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default EducationForm;
