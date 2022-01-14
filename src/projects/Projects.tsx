import React from 'react';
import styles from './Projects.module.css';

function Projects() {
  const Task = () => (
    <li className={styles['task-item']}>
      <div className={styles['task-project']}>
        <span className={styles.dot} />
        Hola como vas
      </div>
      <span>Tareaza</span>
    </li>
  );

  return (
    <ul className={styles['tasks-list']}>
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </ul>
  );
}

export default Projects;
