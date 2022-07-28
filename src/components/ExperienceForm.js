import React from "react";

const ExperienceForm = () => {
  return (
    <div className="experience-form">
      <label htmlFor="Experience">Experience</label>
      <input type="text" name="" id="" placeholder="Position" />
      <input type="text" name="" id="" placeholder="Company" />
      <input type="text" name="" id="" placeholder="Location" />
      <label htmlFor="job-start">From</label>
      <input type="date" name="job-start" id="" />
      <label htmlFor="job-end">To</label>
      <input type="date" name="job-end" id="" />
      <div className="buttons">
        <button>Add</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default ExperienceForm;
