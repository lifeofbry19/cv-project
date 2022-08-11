import React from "react";
import ResumeTemplate1 from "../images/ResumeTemplate1.png";
import HomeImg from "../images/HomeImg.jpg";

const Home = () => {
  return (
    <div className="home-page">
      <nav className="home-header">Resume Builder</nav>
      <div className="welcome-text">
        <h1>Welcome to Resume Builder! This is where you get the job.</h1>
        <h3>
          A Quick and Easy Way to Create Your Professional Resume. Select one of
          our templates and create your professional, nicely-styled resume in
          minutes. Resume builder is the best place to create your resume. Best
          of all, it's completely free!
        </h3>
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
