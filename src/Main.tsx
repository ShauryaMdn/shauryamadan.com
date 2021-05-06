import React from 'react';

import { ExperienceSection, NavigationBar, ShauryaInformation, ProjectsAndEducationSection, ContactSection } from "./components";
import './Main.scss';

function Main() {
  return (
    <div>
        <NavigationBar/>
        <ShauryaInformation/>
        <ExperienceSection/>
        <ProjectsAndEducationSection/>
        <ContactSection/>
    </div>
  );
}
export default Main;
