import React from "react";

const EducationForm = ({ educationExperience, setEducationExperience, id }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEducationExperience((prevVal) => {
      return prevVal.map((obj) => {
        return obj.id === id ? Object.assign(obj, { [name]: value }) : obj;
      });
    });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setEducationExperience((prevVal) => {
      return prevVal.filter((obj) => {
        console.log(obj.id, id);
        return obj.id !== id;
      });
    });
  };

  return (
    <div className="education-form">
      <label htmlFor="Experience">Education</label>
      <input
        type="text"
        name="university"
        id=""
        placeholder="University"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        id=""
        placeholder="Description (optional)"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="degree"
        id=""
        placeholder="Degree"
        onChange={handleInputChange}
      />
      <label htmlFor="start">From</label>
      <input
        type="text"
        placeholder="Start Date"
        name="from"
        id=""
        onChange={handleInputChange}
      />
      <label htmlFor="end">To</label>
      <input
        type="text"
        name="to"
        placeholder="End Date"
        id=""
        onChange={handleInputChange}
      />
      <div className="buttons">
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default EducationForm;
