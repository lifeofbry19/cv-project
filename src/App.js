import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ResumeBuilder from "./pages/ResumeBuilder";
function App() {
  const [templateSelected, setTemplateSelected] = useState(0);

  useEffect(() => {
    console.log(window.localStorage);
    const templateData = window.localStorage.getItem("templateID");
    if (templateData !== null) {
      setTemplateSelected(JSON.parse(templateData));
    }
  }, []); // when component first renders, set the templateSelected state value to
  // the previously selected value if there was one

  useEffect(() => {
    if (templateSelected !== 0) {
      window.localStorage.setItem(
        "templateID",
        JSON.stringify(templateSelected)
      );
      console.log(window.localStorage);
    }
  }, [templateSelected]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home setTemplateSelected={setTemplateSelected} />}
        />
        <Route
          path="/resume-builder"
          element={<ResumeBuilder templateSelected={templateSelected} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
