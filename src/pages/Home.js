import React from "react";
import ResumeTemplate1 from "../ResumeTemplate1.png";

const Home = () => {
  return (
    <div className="home-page">
      <nav className="home-header">Resume Builder</nav>
      <div className="welcome-text">
        <h2>Welcome to Resume Builder! Choose a template to get started.</h2>
      </div>
      <div className="templates">
        <a href="/resume-builder">
          <img src={ResumeTemplate1} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Home;
