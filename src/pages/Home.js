import React from "react";
import ResumeTemplate1 from "../ResumeTemplate1.png";
import HomeImg from "../HomeImg.jpg";

const Home = () => {
  return (
    <div className="home-page">
      <nav className="home-header">Resume Builder</nav>
      <div className="welcome-text">
        <h1>Welcome to Resume Builder! This is where you get the job.</h1>
        <p>
          A Quick and Easy Way to Create Your Professional Resume. 30+
          Professional Resume Templates Choose from over thirty modern and
          professional templates. All of which can be customized to your liking.
          Fast and Easy to Use Our resume builder lets you easily and quickly
          create a resume using our resume wizard.
        </p>
      </div>
      <div className="home-img-wrapper">
        <img className="home-image" src={HomeImg} alt="" />
      </div>
      <div className="templates">
        <h1>Choose a template to get started</h1>
        <a href="/resume-builder">
          <img src={ResumeTemplate1} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Home;
