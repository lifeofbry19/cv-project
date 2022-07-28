import React from "react";

const PersonalInfoForm = ({ userInfo }) => {
  return (
    <div className="personal-info-form">
      <label htmlFor="personal-info">Personal Information</label>
      <input type="text" name="" id="" placeholder="Name" />
      <input type="text" name="" id="" placeholder="Title" />
      <input type="text" name="" id="" placeholder="Address" />
      <input type="text" name="" id="" placeholder="Phone Number" />
      <input type="email" name="" id="" placeholder="Email" />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Description"
      ></textarea>
    </div>
  );
};

export default PersonalInfoForm;
