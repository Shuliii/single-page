import styles from "./SectionResume.module.css";

import patternRing from "../assets/images/pattern-rings.svg";

const SectionResume = () => {
  return (
    <section className={styles.section}>
      <ul>
        <li>
          <h2>HTML</h2>
          <p>4 Years Experience</p>
        </li>
        <li>
          <h2>CSS</h2>
          <p>4 Years Experience</p>
        </li>
        <li>
          <h2>Javascript</h2>
          <p>4 Years Experience</p>
        </li>
        <li>
          <h2>Accessibility</h2>
          <p>4 Years Experience</p>
        </li>
        <li>
          <h2>React</h2>
          <p>3 Years Experience</p>
        </li>
        <li>
          <h2>Sass</h2>
          <p>3 Years Experience</p>
        </li>
      </ul>
      <img src={patternRing} alt=""></img>
    </section>
  );
};

export default SectionResume;
