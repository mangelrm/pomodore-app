import React from 'react';
import classNames from 'classnames';
import styles from './Projects.module.css';

const dummyProjects = [
  { id: 1, color: 'red', name: 'First project' },
  { id: 2, color: 'green', name: 'Another one' },
  { id: 3, color: 'cian', name: 'One more' },
];

function Projects() {
  return (
    <ul className={styles.projects}>
      {dummyProjects.map((project) => (
        <li className={styles.item}>
          <span
            className={classNames(styles.dot, {
              [styles[project.color]]: true,
            })}
          />
          {project.name}
        </li>
      ))}
    </ul>
  );
}

export default Projects;
