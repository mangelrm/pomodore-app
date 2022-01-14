import React, { useState } from 'react';
import MobileNavbar from '../mobileNavbar/MobileNavbar';
import Projects from '../projects/Projects';
import Timer from '../timer/Timer';
import { Screen } from '../utils/mobileScreens';
import styles from './MobileApp.module.css';

function MobileApp() {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.PROJECTS);

  return (
    <div className={styles.app}>
      <div className={styles.screen}>
        {currentScreen === Screen.PROJECTS && <Projects />}
        {currentScreen === Screen.TASKS && <div />}
        {currentScreen === Screen.TIMER && <Timer />}
      </div>
      <MobileNavbar handleScreenChange={setCurrentScreen} />
    </div>
  );
}

export default MobileApp;
