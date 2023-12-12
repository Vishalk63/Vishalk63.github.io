import React from "react";
import styles from "./Contact.module.css";
function Contact() {
  return (
    <div id="contact">
      <div className={styles.parent}>
        <div>
          {/* <h3>GET IN TOUCH</h3><br /><br /> */}
          <h1>VISHAL KACHARE</h1>
          <div className={styles.myicons}>
            <div>
              <a href="https://github.com/Vishalk63" target="blank">
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/vishal-kachare-53061527a/"
                target="blank"
              >
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
