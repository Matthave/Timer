import React from "react";
import cx from "classnames";
import styles from "../../css/style.module.css";

class Timer extends React.Component {
  state = {
    hoursInput: 0,
    minutesInput: 0,
    secondsInput: 0,
    editIcon: true,
  };

  handleInputChange = (e) => {
    if (e.target.value.length > 2) {
      return;
    }

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleEditIcon = () => {
    this.setState({
      editIcon: !this.state.editIcon,
    });
  };

  timerStart = () => {
    setInterval(() => {
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
    }, 1000);
  };

  resetTimer = () => {
    this.setState({
      hoursInput: 0,
      minutesInput: 0,
      secondsInput: 0,
      editIcon: true,
    });
  };
  render() {
    const { editIcon, secondsInput, minutesInput, hoursInput } = this.state;
    return (
      <div className={styles.timer}>
        <section className={styles.timerSection}>
          <input
            className={cx(styles.timerSection__input, {
              [styles.disabledInput]: editIcon,
            })}
            type="text"
            value={`${
              hoursInput <= 9 && editIcon ? `0${hoursInput}` : hoursInput
            }`}
            onChange={(e) => this.handleInputChange(e)}
            name="hoursInput"
            disabled={editIcon ? true : false}
          />
          <label className={styles.timerSection__label} htmlFor="hours">
            Hours
          </label>
        </section>
        <section className={styles.timerSection}>
          <input
            className={cx(styles.timerSection__input, {
              [styles.disabledInput]: editIcon,
            })}
            type="text"
            value={`${
              minutesInput <= 9 && editIcon ? `0${minutesInput}` : minutesInput
            }`}
            onChange={(e) => this.handleInputChange(e)}
            name="minutesInput"
            disabled={editIcon ? true : false}
          />
          <label className={styles.timerSection__label} htmlFor="">
            Minutes
          </label>
        </section>
        <section className={styles.timerSection}>
          <input
            className={cx(styles.timerSection__input, {
              [styles.disabledInput]: editIcon,
            })}
            type="text"
            value={`${
              secondsInput <= 9 && editIcon ? `0${secondsInput}` : secondsInput
            }`}
            onChange={(e) => this.handleInputChange(e)}
            name="secondsInput"
            disabled={editIcon ? true : false}
          />
          <label className={styles.timerSection__label} htmlFor="">
            Seconds
          </label>
        </section>
        <section className={styles.iconSection}>
          <div
            onClick={this.handleEditIcon}
            className={cx({
              "fas fa-edit": editIcon,
              "fas fa-check": !editIcon,
            })}
          ></div>
          <div
            className={cx("fas fa-play", {
              [styles.disabled]: !editIcon,
            })}
            onClick={editIcon ? this.timerStart : null}
          ></div>
          <div className="fas fa-undo-alt" onClick={this.resetTimer}></div>
        </section>
      </div>
    );
  }
}

export default Timer;
