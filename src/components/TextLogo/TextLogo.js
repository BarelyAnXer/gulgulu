import React from 'react'
import styles from './TextLogo.module.css'

function TextLogo ({ fontSize = '5.5rem' }) {
  return (
    <>
      {/*<div className={styles.container}>*/}
      {/*  <div style={{*/}
      {/*    display: 'flex',*/}
      {/*  }}>*/}
      {/*    <p style={{*/}
      {/*      marginTop: 'auto',*/}
      {/*    }} className={styles.blue}>G</p>*/}
      {/*    <p className={styles.red}>u</p>*/}
      {/*    <p className={styles.yellow}>l</p>*/}
      {/*    <p className={styles.green}>u</p>*/}
      {/*    <p className={styles.blue}>G</p>*/}
      {/*    <p className={styles.red}>u</p>*/}
      {/*    <p className={styles.yellow}>l</p>*/}
      {/*    <p className={styles.green}>u</p>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div className={styles.container} style={{
        fontSize: fontSize,
      }}>
        <p className={styles.blue}>G</p>
        <p className={styles.red}>u</p>
        <p className={styles.yellow}>l</p>
        <p className={styles.blue}>u</p>
        <p className={styles.green}>*</p>
        <p className={styles.red}>2</p>
      </div>

      {/*gulu2x*/}

      {/*<div className={styles.container}>*/}
      {/*  <p className={styles.blue}>G</p>*/}
      {/*  <p className={styles.red}>o</p>*/}
      {/*  <p className={styles.yellow}>o</p>*/}
      {/*  <p className={styles.blue}>g</p>*/}
      {/*  <p className={styles.green}>l</p>*/}
      {/*  <p className={styles.red}>e</p>*/}
      {/*</div>*/}

    </>
  )
}

export default TextLogo
