import React from "react";
import ResumeTemplate1 from "../images/ResumeTemplate1.png";
import ResumeTemplate2 from "../images/ResumeTemplate2.png";
import styles from "./Home.css";

const Home = ({ setTemplateSelected }) => {
  const handleClick = (e) => {
    console.log("clicked");
    console.log(e.target.id);
    setTemplateSelected(e.target.id);
  };
  return (
    <>
      <section className="home-page">
        <nav className="home-header">
          <h3>Resume Builder</h3>
          <h3>Explore Templates</h3>
        </nav>
        <div className="welcome-text">
          <h1>Welcome to Resume Builder! This is where you get the job.</h1>
          <h4>
            A quick and easy way to create your resume. Select one of our
            templates and create your professional, nicely-styled resume in
            minutes. Resume builder is the best place to create your resume.
            Best of all, it's completely free!
          </h4>
        </div>
      </section>
      <section className="template-wrapper">
        <h1 className="template-title">
          <span className="hl"></span>Choose a template to get started
        </h1>
        <div className="templates">
          <a href="/resume-builder" onClick={handleClick}>
            <img id={0} src={ResumeTemplate1} alt="" />
          </a>
          <a href="/resume-builder" onClick={handleClick}>
            <img id={1} src={ResumeTemplate2} className="template-two" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
