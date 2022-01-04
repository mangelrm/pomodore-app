import React from 'react'
import styles from './TimerScreen.module.css';

function TimerScreen() {


  const Header = () => <div className={styles.header}>
    <h1 className={styles.title}>La tareaza</h1>
    <div className={styles.subtitle}>
      <span className={styles.dot} />
      Hola como estas
    </div>
  </div>

  return (
    <div className={styles['full-screen']}>
      <Header />
    </div>
  )
}

export default TimerScreen
