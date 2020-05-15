import React from 'react';

import { ExperienceSection, NavigationBar, ShauryaInformation, ProjectsSection } from "./components";
import './Main.scss';

function Main() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <ShauryaInformation></ShauryaInformation>
      <ExperienceSection></ExperienceSection>
      <ProjectsSection></ProjectsSection>
    </div>
  );
}
export default Main;
