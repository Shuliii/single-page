import styles from "./SectionProject.module.css";

import project1 from "../assets/images/thumbnail-project-1-large.webp";
import project2 from "../assets/images/thumbnail-project-2-large.webp";
import project3 from "../assets/images/thumbnail-project-3-large.webp";
import project4 from "../assets/images/thumbnail-project-4-large.webp";
import project5 from "../assets/images/thumbnail-project-5-large.webp";
import project6 from "../assets/images/thumbnail-project-6-large.webp";

const SectionProject = () => {
  return (
    <section className={styles.sectionProject}>
      <div className={styles.sectionHeader}>
        <h2>Projects</h2>
        <button>Contact Me</button>
      </div>

      <ul>
        <li>
          <img src={project1} alt="" />
          <h3>Design Portfolio</h3>
          <div>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </li>
        <li>
          <img src={project2} alt="" />
          <h3>E-learning Landing Page</h3>
          <div>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </li>
        <li>
          <img src={project3} alt="" />
          <h3>TODO WEB APP</h3>
          <div>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
            </ul>
          </div>
        </li>
        <li>
          <img src={project4} alt="" />
          <h3>Entertainment Web App</h3>
          <div>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
            </ul>
          </div>
        </li>
        <li>
          <img src={project5} alt="" />
          <h3>Memory Game</h3>
          <div>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
            </ul>
          </div>
        </li>
        <li>
          <img src={project6} alt="" />
          <h3>Art Gallery Showcase</h3>
          <div>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default SectionProject;
