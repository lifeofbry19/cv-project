import React from "react";
import ResumeTemplate1 from "../images/ResumeTemplate1.png";
import HomeImg from "../images/HomeImg.jpg";

const Home = ({ setTemplateSelected }) => {
  const handleClick = (e) => {
    console.log("clicked");
    console.log(e.target.id);
    setTemplateSelected(e.target.id);
  };
  return (
    <div className="home-page">
      <nav className="home-header">Resume Builder</nav>
      <div className="welcome-text">
        <h1>Welcome to Resume Builder! This is where you get the job.</h1>
        <h3>
          A quick and easy way to create your resume. Select one of our
          templates and create your professional, nicely-styled resume in
          minutes. Resume builder is the best place to create your resume. Best
          of all, it's completely free!
        </h3>
      </div>
      <div className="home-img-wrapper">
        <img className="home-image" src={HomeImg} alt="" />
      </div>
      <h1 className="template-title">Choose a template to get started</h1>
      <div className="templates">
        <a href="/resume-builder" onClick={handleClick}>
          <img id={0} src={ResumeTemplate1} alt="" />
        </a>
        <a href="/resume-builder" onClick={handleClick}>
          <div id={1} className="template-two"></div>
        </a>
      </div>
    </div>
  );
};

export default Home;
