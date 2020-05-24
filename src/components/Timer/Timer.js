import React from "react";
import cx from "classnames";
import alarmSound from "../../sounds/clockAlarm.mp3";
import styles from "../../css/style.module.css";

class Timer extends React.Component {
  state = {
    hoursInput: 0,
    minutesInput: 0,
    secondsInput: 0,
    editIcon: true,
    intervalId: "",
    flag: true,
    stopWatchVisibility: false,
  };

  handleInputChange = (e) => {
    const numberValue = Number(e.target.value);

    if (numberValue.length > 2) {
      return;
    }

    if (e.target.name === "hoursInput") {
      this.setState({
        hoursInput: `${
          numberValue > 99 || numberValue < 0 ? 99 : parseInt(numberValue, 10)
        }`,
      });
      return;
    }
    if (
      numberValue > 59 ||
      numberValue < 0 ||
      typeof numberValue !== "number"
    ) {
      this.setState({
        [e.target.name]: 59,
      });
    } else {
      this.setState({
        [e.target.name]: numberValue,
      });
    }
  };

  handleEditIcon = () => {
    clearInterval(this.state.intervalId);
    this.setState({
      editIcon: !this.state.editIcon,
      flag: true,
    });
  };

  timerStart = () => {
    if (this.state.flag) {
      const interval = setInterval(() => {
        const { secondsInput, minutesInput, hoursInput } = this.state;
        if (secondsInput > 0) {
          this.setState({
            secondsInput: secondsInput - 1,
          });
        }
        if (secondsInput === 0 && minutesInput > 0) {
          this.setState({
            secondsInput: 59,
            minutesInput: minutesInput - 1,
          });
        }
        if (secondsInput === 0 && minutesInput === 0 && hoursInput > 0) {
          this.setState({
            secondsInput: 59,
            minutesInput: 59,
            hoursInput: hoursInput - 1,
          });
        }
        if (
          hoursInput === 0 &&
          minutesInput === 0 &&
          secondsInput === 0 &&
          !this.state.flag
        ) {
          document.querySelector("audio").play();
          this.setState({
            flag: !this.state.flag,
            stopWatchVisibility: true,
          });
        }
      }, 1000);
      this.setState({
        intervalId: interval,
        flag: !this.state.flag,
      });
    } else {
      clearInterval(this.state.intervalId);
      this.setState({
        flag: !this.state.flag,
      });
    }
  };

  resetTimer = () => {
    clearInterval(this.state.intervalId);
    this.setState({
      hoursInput: 0,
      minutesInput: 0,
      secondsInput: 0,
      editIcon: true,
      flag: true,
    });
  };

  hideStopWatch = () => {
    document.querySelector("audio").pause();
    this.setState({
      stopWatchVisibility: false,
    });
    this.resetTimer();
  };

  render() {
    const {
      editIcon,
      secondsInput,
      minutesInput,
      hoursInput,
      flag,
      stopWatchVisibility,
    } = this.state;
    return (
      <div className={styles.timer}>
        <section className={styles.timerSection}>
          <input
            className={cx(styles.timerSection__input, {
              [styles.disabledInput]: !editIcon,
            })}
            type="number"
            value={hoursInput <= 9 ? `0${hoursInput}` : hoursInput}
            onChange={(e) => this.handleInputChange(e)}
            name="hoursInput"
            disabled={editIcon ? false : true}
          />
          <label className={styles.timerSection__label} htmlFor="hours">
            Hours
          </label>
        </section>
        <section className={styles.timerSection}>
          <input
            className={cx(styles.timerSection__input, {
              [styles.disabledInput]: !editIcon,
            })}
            type="number"
            value={minutesInput <= 9 ? `0${minutesInput}` : minutesInput}
            onChange={(e) => this.handleInputChange(e)}
            name="minutesInput"
            disabled={editIcon ? false : true}
          />
          <label className={styles.timerSection__label} htmlFor="">
            Minutes
          </label>
        </section>
        <section className={styles.timerSection}>
          <input
            className={cx(styles.timerSection__input, {
              [styles.disabledInput]: !editIcon,
            })}
            type="number"
            min="0"
            max="59"
            value={secondsInput <= 9 ? `0${secondsInput}` : secondsInput}
            onChange={(e) => this.handleInputChange(e)}
            name="secondsInput"
            disabled={editIcon ? false : true}
          />
          <label className={styles.timerSection__label} htmlFor="">
            Seconds
          </label>
        </section>
        <section className={styles.iconSection}>
          <div
            onClick={stopWatchVisibility ? null : this.handleEditIcon}
            className={cx({
              "fas fa-edit": !editIcon,
              "fas fa-check": editIcon,
              [styles.disabled]: stopWatchVisibility,
            })}
          ></div>
          <div
            className={cx({
              "fas fa-play": flag,
              "fas fa-pause": !flag,
              [styles.disabled]:
                editIcon ||
                (secondsInput === 0 && hoursInput === 0 && minutesInput === 0),
            })}
            onClick={
              editIcon ||
              (secondsInput === 0 && hoursInput === 0 && minutesInput === 0)
                ? null
                : this.timerStart
            }
          ></div>
          <div
            className={cx("fas fa-undo-alt", {
              [styles.disabled]: stopWatchVisibility,
            })}
            onClick={stopWatchVisibility ? null : this.resetTimer}
          ></div>
        </section>
        <div
          className={cx("fas fa-stopwatch", styles.stopWatch, {
            [styles.stopWatch__visibility]: stopWatchVisibility,
          })}
          onClick={this.hideStopWatch}
        ></div>
        <audio loop="loop">
          <source src={alarmSound} type="audio/mpeg" />
          <source src={alarmSound} type="audio/wav" />
          <source src={alarmSound} type="audio/ogg" />
        </audio>
      </div>
    );
  }
}

export default Timer;
