import React from 'react';
import { Screen } from '../utils/mobileScreens';
import styles from './MobileNavbar.module.css';

type Props = {
  handleScreenChange: (s: Screen) => void;
};

function MobileNavbar({ handleScreenChange }: Props) {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menu}>
        <li>
          <button onClick={() => handleScreenChange(Screen.TIMER)}>
            Timer
          </button>
        </li>
        <li>
          <button onClick={() => handleScreenChange(Screen.TASKS)}>
            Tareas
          </button>
        </li>
        <li>
          <button onClick={() => handleScreenChange(Screen.PROJECTS)}>
            Proyectos
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNavbar;
