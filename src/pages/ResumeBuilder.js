import CvOutput from "../components/CvOutput";
import EducationForm from "../components/EducationForm";
import ExperienceForm from "../components/ExperienceForm";
import PersonalInfoForm from "../components/PersonalInfoForm";
import React, { useState } from "react";
import AddExperienceButton from "../components/AddExperienceButton";
import AddEducationButton from "../components/AddEducationButton";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function ResumeBuilder() {
  const [personalInfo, setPersonalInfo] = useState({});

  const [workExperience, setWorkExperience] = useState([
    { position: "", description: "", company: "", from: "", to: "", id: 0 },
  ]);
  const [educationExperience, setEducationExperience] = useState([
    { university: "", description: "", degree: "", from: "", to: "", id: 0 },
  ]);

  const handleClick = (e) => {
    e.preventDefault();
    const PdfInput = document.querySelector(".cv-output");
    html2canvas(PdfInput, {
      logging: true,
      letterRendering: 1,
      useCORS: true,
    }).then((canvas) => {
      const imgWidth = 208;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="App">
      <header>Resume Builder</header>

      <div className="main-container">
        <div className="cv-form">
          <form action="">
            <PersonalInfoForm
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
            />
            {workExperience.map((obj) => {
              return (
                <ExperienceForm
                  key={obj.id}
                  id={obj.id}
                  workExperience={workExperience}
                  setWorkExperience={setWorkExperience}
                />
              );
            })}
            <AddExperienceButton
              workExperience={workExperience}
              setWorkExperience={setWorkExperience}
            />
            {educationExperience.map((obj) => {
              return (
                <EducationForm
                  key={obj.id}
                  id={obj.id}
                  educationExperience={educationExperience}
                  setEducationExperience={setEducationExperience}
                />
              );
            })}
            <AddEducationButton
              educationExperience={educationExperience}
              setEducationExperience={setEducationExperience}
            />

            <input type="submit" value="Generate PDF" onClick={handleClick} />
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

export default ResumeBuilder;
