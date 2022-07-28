import CvOutput from "./components/CvOutput";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import PersonalInfoForm from "./components/PersonalInfoForm";
import React, { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({});

  return (
    <div className="App">
      <header
        style={{
          position: "absolute",
          top: "0",
          height: "50px",
          backgroundColor: "darkgray",
          width: "100%",
          color: "white",
        }}
      >
        CV Creator
      </header>
      <div
        className="main-container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr",
          height: "1400px",
          marginTop: "50px",
        }}
      >
        <div className="cv-form">
          <form action="">
            <PersonalInfoForm userInput={userInput} />
            <ExperienceForm />

            <EducationForm />

            <input type="submit" value="Generate PDF" />
          </form>
        </div>

        <CvOutput />
      </div>
      <footer
        style={{
          position: "absolute",
          bottom: "-50%",
          height: "30px",
          width: "100%",
          color: "white",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Created by Bryant Young
      </footer>
    </div>
  );
}

export default App;
