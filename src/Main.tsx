import React from 'react';

import { ExperienceCards, NavigationBar, ShauryaInformation } from "./components";
import './Main.scss';

function Main() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <ShauryaInformation></ShauryaInformation>
      <ExperienceCards></ExperienceCards>
    </div>
  );
}
export default Main;
