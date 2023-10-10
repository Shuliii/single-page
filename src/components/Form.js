import { useRef } from "react";

import styles from "./Form.module.css";

const Form = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const nameBlurHandler = (e) => {};

  return (
    <form className={styles.form}>
      <div className={styles.inputControl}>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          ref={nameRef}
          onBlur={nameBlurHandler}
          placeholder="NAME"
        />
      </div>
      <div className={styles.inputControl}>
        <label htmlFor="email"></label>
        <input type="text" id="email" placeholder="EMAIL" />
      </div>
      <div className={styles.inputControl}>
        <label htmlFor="Message"></label>
        <input type="text" id="Message" placeholder="MESSAGE" />
      </div>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default Form;
