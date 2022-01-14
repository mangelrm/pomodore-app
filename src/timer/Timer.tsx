import React from 'react';
import styles from './Timer.module.css';

function Timer() {
  const Header = () => (
    <div className={styles.header}>
      <h1 className={styles.title}>Realizar diseño</h1>
      <div className={styles.subtitle}>
        <span className={styles.dot} />
        Página web X
      </div>
    </div>
  );

  const TaskControls = () => (
    <div className={styles['task-controls']}>
      <button className='action-button'>Cambiar tarea</button>
      <button className='action-button'>Completar tarea</button>
    </div>
  );

  const Timer = () => <div className={styles.timer}>22:56</div>;

  const PomodoreControls = () => (
    <div className={styles['pomodore-controls']}>
      <button className='action-button'>Completar pomodoro</button>
      <button className='action-button'>1/4 Reiniciar sesión</button>
    </div>
  );

  return (
    <>
      <Header />
      <TaskControls />
      <Timer />
      <PomodoreControls />
    </>
  );
}

export default Timer;
