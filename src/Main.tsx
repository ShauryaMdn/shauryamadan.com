import React from 'react';

import { NavigationBar, ShauryaInformation } from "./components";
import './Main.scss';

function Main() {
  return (
    <div className="background">
      <NavigationBar></NavigationBar>
      <ShauryaInformation></ShauryaInformation>
    </div>
  );
}
export default Main;
