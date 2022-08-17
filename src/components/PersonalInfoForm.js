import React from "react";

const PersonalInfoForm = ({ personalInfo, setPersonalInfo }) => {
  const handleInput = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  return (
    <div className="personal-info-form">
      <label htmlFor="personal-info">Personal Information</label>
      <input
        type="text"
        name="name"
        id=""
        placeholder="Name"
        onChange={handleInput}
        value={personalInfo.name}
      />
      <input
        type="text"
        name="title"
        id=""
        placeholder="Title"
        onChange={handleInput}
        value={personalInfo.title}
      />
      <input
        type="text"
        name="address"
        id=""
        placeholder="Address"
        onChange={handleInput}
        value={personalInfo.address}
      />
      <input
        type="text"
        name="phone"
        id=""
        placeholder="Phone Number"
        onChange={handleInput}
        value={personalInfo.phone}
      />
      <input
        type="email"
        name="email"
        id=""
        placeholder="Email"
        onChange={handleInput}
        value={personalInfo.email}
      />
      <textarea
        name="description"
        id=""
        cols="30"
        rows="10"
        placeholder="Personal Bio / Tech Used"
        onChange={handleInput}
        value={personalInfo.description}
      ></textarea>
    </div>
  );
};

export default PersonalInfoForm;
