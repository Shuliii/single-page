import styles from "./Header.module.css";

import patternRing from "../assets/images/pattern-rings.svg";
import patternCircle from "../assets/images/pattern-circle.svg";

import github from "../assets/images/icon-github.svg";
import frontendmentor from "../assets/images/icon-frontend-mentor.svg";
import linkedin from "../assets/images/icon-linkedin.svg";
import twitter from "../assets/images/icon-twitter.svg";

const Header = () => {
  const photoHelper = "image-profile-desktop.webp";
  return (
    <>
      <header>
        <div className={styles.images}>
          <img className={styles.ring} src={patternRing} alt="" />

          <picture className={styles.profilePhoto}>
            <source media="(max-width:768px)" srcset="img_pink_flowers.jpg" />
            <source media="(max-width:375px)" srcset="img_white_flower.jpg" />
            <img
              src={require(`../assets/images/${photoHelper}`)}
              alt=""
              style={{ width: 445 }}
            />
          </picture>
          <img className={styles.circle} src={patternCircle} alt="" />
        </div>
        <nav className={styles.headerNav}>
          <div className={styles.logo}>
            <span>adamkeyes</span>
          </div>
          <ul>
            <li>
              <img src={github} alt="" />
            </li>
            <li>
              <img src={frontendmentor} alt="" />
            </li>
            <li>
              <img src={linkedin} alt="" />
            </li>
            <li>
              <img src={twitter} alt="" />
            </li>
          </ul>
        </nav>

        <div className={styles.mainHeader}>
          <h1>Nice to meet you!</h1>
          <h1>
            I'm <span>Adam Keyes</span>.
          </h1>

          <p>
            Based in the UK, I'm a front-end developer passionate about building
            accessible web apps that users love.
          </p>
        </div>

        <button>Contact Me</button>
      </header>
    </>
  );
};

export default Header;
