import { useState } from "react";
import useWindows from "../hooks/use-windows";
import styles from "./Header.module.css";

import patternRing from "../assets/images/pattern-rings.svg";
import patternCircle from "../assets/images/pattern-circle.svg";

import github from "../assets/images/icon-github.svg";
import frontendmentor from "../assets/images/icon-frontend-mentor.svg";
import linkedin from "../assets/images/icon-linkedin.svg";
import twitter from "../assets/images/icon-twitter.svg";

import photoDesktop from "../assets/images/image-profile-desktop.webp";
import photoTablet from "../assets/images/image-profile-tablet.webp";
import photoMobile from "../assets/images/image-profile-mobile.webp";

const Header = () => {
  return (
    <>
      <header>
        <div className={styles.images}>
          <img className={styles.ring} src={patternRing} alt="" />
          {/* <img
            className={styles.profilePhoto}
            src={require(`../assets/images/${photoHelper}`)}
            alt=""
          /> */}

          {/* <picture className={styles.profilePhoto}>
            <source media="(max-width:1024px)" srcset={photoTablet} />
            <source media="(max-width:425px)" srcset={photoMobile} />
            <img src={photoDesktop} alt="" style={{ width: 445 }} />
          </picture> */}
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
          <h1>
            Nice to meet you! I'm <span>Adam Keyes</span>.
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
