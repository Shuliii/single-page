import styles from "./Footer.module.css";
import Form from "./Form";

import github from "../assets/images/icon-github.svg";
import frontendmentor from "../assets/images/icon-frontend-mentor.svg";
import linkedin from "../assets/images/icon-linkedin.svg";
import twitter from "../assets/images/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.mainFooter}>
        <div>
          <h2>Contact</h2>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form and I'll get back to you as soon as possible.
          </p>
        </div>
        <Form />
      </section>
      <section className={styles.secondFooter}>
        <nav>
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
      </section>
    </footer>
  );
};

export default Footer;
