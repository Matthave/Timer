import React from "react";
import cx from "classnames";
import styles from "../../css/style.module.css";

const Input = ({ editIcon, secondsInput, name, handleInputChange, text }) => {
  return (
    <section className={styles.timerSection}>
      <input
        className={cx(styles.timerSection__input, {
          [styles.disabledInput]: !editIcon,
        })}
        type="number"
        min="0"
        max="59"
        value={secondsInput <= 9 ? `0${secondsInput}` : secondsInput}
        onChange={(e) => handleInputChange(e)}
        name={name}
        disabled={editIcon ? false : true}
      />
      <label className={styles.timerSection__label}>{text}</label>
    </section>
  );
};

export default Input;
