// App.js (Main Component)
import React from "react";
import Header from "./Header";
import Section from "./Section";
import Objective from "./Objective";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Training from "./Training";
import AdditionalInfo from "./AdditionalInfo";
import Declaration from "./Declaration";
import PDFButton from "./PDFButton";
import "./CV.css";
function CV() {
  return (
    <div className="container">
      <Header />

      <Section icon="bullseye" title="Objective">
        <Objective />
      </Section>
      <Section icon="graduation-cap" title="Education">
        <Education />
      </Section>
      <Section icon="laptop-code" title="Technical Skills">
        <Skills />
      </Section>
      <Section icon="project-diagram" title="Projects">
        <Projects />
      </Section>
      <Section icon="certificate" title="Training & Certification">
        <Training />
      </Section>
      <Section icon="info-circle" title="Additional Information">
        <AdditionalInfo />
      </Section>
      <Section icon="file-signature" title="Self Declaration">
        <Declaration />
      </Section>
      <PDFButton />
    </div>
  );
}

export default CV;
