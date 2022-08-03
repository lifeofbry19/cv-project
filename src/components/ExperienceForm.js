import React, { useState } from "react";

const ExperienceForm = ({ workExperience, setWorkExperience, id }) => {
  //const randomId = () => Math.random() * 10000;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWorkExperience((prevVal) => {
      return prevVal.map((obj) => {
        return obj.id === id ? Object.assign(obj, { [name]: value }) : obj;
      });
    });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setWorkExperience((prevVal) => {
      return prevVal.filter((obj) => {
        console.log(obj.id, id);
        return obj.id !== id;
      });
    });
  };

  return (
    <div className="experience-form">
      <label htmlFor="Experience">Experience</label>
      <input
        type="text"
        name="position"
        id=""
        placeholder="Position"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="company"
        id=""
        placeholder="Company"
        onChange={handleInputChange}
      />
      <textarea
        name="description"
        id=""
        cols="30"
        rows="10"
        placeholder="Description"
        onChange={handleInputChange}
      ></textarea>

      <label htmlFor="start">From</label>
      <input
        type="text"
        name="start"
        id=""
        placeholder="Start Date"
        onChange={handleInputChange}
      />
      <label htmlFor="end">To</label>
      <input
        type="text"
        name="end"
        id=""
        placeholder="End Date"
        onChange={handleInputChange}
      />
      <div className="buttons">
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ExperienceForm;
