import React from "react";
import styles from "./About.module.css";
function About() {
  return (
    <div id="about">
      <div className={styles.aboutContainer}>
        <h1>About</h1>
        <div>
          {/* <h1>About</h1><br /><br /> */}
          <h2>I'm Vishal Kachare</h2><br />
          <p>
            Observant & detail-oriented aspiring full-stack web developer with a
            specialization in MERN stack. Judicious & creative when crafting web
            applications & platforms to propel competitive advantage & revenue
            growth. Looking forward to honing his skills in a challenging work
            environment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
