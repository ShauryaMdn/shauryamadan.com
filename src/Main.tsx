import React from 'react';

import { ExperienceSection, NavigationBar, ShauryaInformation, ProjectsAndEducationSection, ContactSection } from "./components";
import './Main.scss';

function Main() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <ShauryaInformation></ShauryaInformation>
      <ExperienceSection></ExperienceSection>
      <ProjectsAndEducationSection></ProjectsAndEducationSection>
      <ContactSection></ContactSection>
    </div>
  );
}
export default Main;
