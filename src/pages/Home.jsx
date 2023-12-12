import React, { useEffect } from "react";
import styles from "./Home.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Home() {
  let [text] = useTypewriter({
    words: ["DEVELOPER"],
    loop: 1,
  });

  function handleResume() {
    alert("We Will Update Later");
  }
  return (
    <div>
      <div id="home" data-aos="fade-up">
        <div className={styles.homeContainer}>
          {/* --------------------- */}
          <div className={styles.child1}>
            <div>
              <h1>Hi</h1>
              <h1>I'am Vishal</h1>
              <h1>
                MERN{" "}
                <span>
                  {text}
                  <Cursor />{" "}
                </span>
              </h1>

              <div>
                <button onClick={handleResume}>Resume</button>
              </div>

              <div className={styles.icons_container}>
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
          {/* ---------------------------- */}
          <div className={styles.child2}>
            <div>
              <img
                src="https://imgv3.fotor.com/images/gallery/anime-male-avatar-with-a-pair-of-glasses-made-in-fotor-ai-anime-avatar-creator_2023-06-25-054224_ybzr.jpg"
                alt="Profile.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
