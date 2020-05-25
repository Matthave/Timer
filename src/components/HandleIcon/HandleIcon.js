import React from "react";
import cx from "classnames";
import styles from "../../css/style.module.css";

const HandleIcon = ({
  editIcon,
  secondsInput,
  minutesInput,
  hoursInput,
  availableToStartFlag,
  stopWatchVisibility,
  handleEditIcon,
  timerStart,
  resetTimer,
}) => {
  return (
    <section className={styles.iconSection}>
      <div
        onClick={stopWatchVisibility ? null : handleEditIcon}
        className={cx({
          "fas fa-edit": !editIcon,
          "fas fa-check": editIcon,
          [styles.disabled]: stopWatchVisibility,
        })}
      ></div>
      <div
        className={cx({
          "fas fa-play": availableToStartFlag,
          "fas fa-pause": !availableToStartFlag,
          [styles.disabled]:
            editIcon ||
            (secondsInput === 0 && hoursInput === 0 && minutesInput === 0),
        })}
        onClick={
          editIcon ||
          (secondsInput === 0 && hoursInput === 0 && minutesInput === 0)
            ? null
            : timerStart
        }
      ></div>
      <div
        className={cx("fas fa-undo-alt", {
          [styles.disabled]: stopWatchVisibility,
        })}
        onClick={stopWatchVisibility ? null : resetTimer}
      ></div>
    </section>
  );
};

export default HandleIcon;
