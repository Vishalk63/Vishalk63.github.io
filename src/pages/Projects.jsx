import React from 'react'
import styles from './Projects.module.css'
import mylogo from '../images/mylogo.png'

function Projects() {

  // const imageUrl = require('./images/1.png').default;

  return (
    <div id='projects'>
      <div className={styles.projectContainer}>
        <h1 style={{color:"#4070f4",margin:"1rem"}}>Projects</h1>
        <div className={styles.box1}>
          <h2>Suger Cosmetics Website</h2>
          <div className={styles.box1Container}>

            <div>
              {/* <img src="https://user-images.githubusercontent.com/100186167/180634476-9259d2c9-1c3f-40eb-9376-3b6b3723d78b.png" alt="" /> */}
              <img src={mylogo} alt="" />
              </div>

            <div>
              <ul>
                <li>Registration facility with an email.</li>
                <li>Added Healthcare products, Lab tests, RTPCR, etc pages.</li>
                <li>Payment gateway with Razorpay.</li>
              </ul>

              <h3>Tech stack- React | Express | NodeJS | Chakra UI | Git</h3>

              <div className={styles.btn}>
                <a href="https://startling-kataifi-32a207.netlify.app/" target='blank'><button>Website</button></a>
                <a href="https://github.com/masai-course/vishal_shivaji_kachare_cap05_159/tree/master/unit-1/Project" target='blank'><button>GitHub</button></a>                
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Projects