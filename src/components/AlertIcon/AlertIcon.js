import React from "react";
import cx from "classnames";
import styles from "../../css/style.module.css";
import alarmSound from "../../sounds/clockAlarm.mp3";

const AlertIcon = ({ stopWatchVisibility, hideStopWatch }) => {
  return (
    <>
      <div
        className={cx("fas fa-stopwatch", styles.stopWatch, {
          [styles.stopWatch__visibility]: stopWatchVisibility,
        })}
        onClick={hideStopWatch}
      ></div>
      <audio loop="loop">
        <source src={alarmSound} type="audio/mpeg" />
        <source src={alarmSound} type="audio/wav" />
        <source src={alarmSound} type="audio/ogg" />
      </audio>
    </>
  );
};

export default AlertIcon;
