import CvOutput from "./components/CvOutput";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import PersonalInfoForm from "./components/PersonalInfoForm";
import React, { useState } from "react";
import AddExperienceButton from "./components/AddExperienceButton";
import AddEducationButton from "./components/AddEducationButton";

function App() {
  const [personalInfo, setPersonalInfo] = useState({});

  const [workExperience, setWorkExperience] = useState([
    { position: "", description: "", company: "", from: "", to: "", id: 0 },
  ]);
  const [educationExperience, setEducationExperience] = useState([
    { university: "", description: "", degree: "", from: "", to: "", id: 0 },
  ]);
  /* const deleteForm = (type, id) => {
    e.preventDefault();
    if (type === "experience") {
      setWorkExperience((prevVal) => {
        const newExpForms = prevVal.filter((obj) => obj.id !== id);
        return newExpForms;
      });
    } else if (type === 'education'){
      setEducationExperience((prevVal))
    }
  }; */
  const experienceFormComponents = workExperience.map((obj) => {
    return (
      <ExperienceForm
        key={obj.id}
        id={obj.id}
        workExperience={workExperience}
        setWorkExperience={setWorkExperience}
      />
    );
  });

  const educationFormComponents = educationExperience.map((obj) => {
    return (
      <EducationForm
        key={obj.id}
        id={obj.id}
        educationExperience={educationExperience}
        setEducationExperience={setEducationExperience}
      />
    );
  });

  return (
    <div className="App">
      <header>CV Creator</header>

      <div className="main-container">
        <div className="cv-form">
          <form action="">
            <PersonalInfoForm
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
            />
            {experienceFormComponents}
            <AddExperienceButton
              workExperience={workExperience}
              setWorkExperience={setWorkExperience}
            />
            {educationFormComponents}
            <AddEducationButton
              educationExperience={educationExperience}
              setEducationExperience={setEducationExperience}
            />

            <input type="submit" value="Generate PDF" />
          </form>
        </div>

        <CvOutput
          personalInfo={personalInfo}
          workExperience={workExperience}
          educationExperience={educationExperience}
        />
      </div>
    </div>
  );
}

export default App;
