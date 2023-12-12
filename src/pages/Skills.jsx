import React, { useEffect } from 'react'
import styles from './Skills.module.css';
function Skills() {

  return (
    <div id='skills'>
      <div className={styles.skillsContainer}>
          <h1 style={{color:"#4070f4"}}>Skills</h1>

          <div>
            <a href=""><img src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg" alt="HTML" /></a>
            <a href=""><img src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg" alt="css" /></a>
            <a href=""><img src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg" alt="js" /></a>
            <a href=""><img src="https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg" alt="react" /></a>
            <a href=""><img src="https://chiranjeev-thapliyal.vercel.app/svg/redux.svg" alt="redux" /></a>
            <a href=""><img src="https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg" alt="node" /></a>
            <a href=""><img src="https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg" alt="mongo" /></a>
            <a href=""><img src="https://chiranjeev-thapliyal.vercel.app/svg/git.svg" alt="git" /></a>
          </div>

      </div>
    </div>
  )
}

export default Skills