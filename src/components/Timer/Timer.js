import React from "react";
import Input from "../Inputs/Input";
import HandleIcon from "../HandleIcon/HandleIcon";
import AlertIcon from "../AlertIcon/AlertIcon";
import styles from "../../css/style.module.css";

class Timer extends React.Component {
  state = {
    hoursInput: 0,
    minutesInput: 0,
    secondsInput: 0,
    editIcon: true,
    intervalId: "",
    availableToStartFlag: true,
    stopWatchVisibility: false,
  };

  componentDidMount() {
    window.addEventListener("keypress", (e) => this.stopAlarmBySpace(e));
  }

  stopAlarmBySpace = (e) => {
    const { stopWatchVisibility, secondsInput, editIcon } = this.state;

    if (e.which === 13 && !stopWatchVisibility) {
      this.handleEditIcon();
    }
    if (e.which === 32 && stopWatchVisibility) {
      this.hideStopWatch();
    } else if (
      e.which === 32 &&
      !stopWatchVisibility &&
      secondsInput !== 0 &&
      !editIcon
    ) {
      this.timerStart();
    }
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
    } else {
      this.setState({
        [e.target.name]: `${
          numberValue > 59 || numberValue < 0 ? 59 : parseInt(numberValue, 10)
        }`,
      });
    }
  };

  handleEditIcon = () => {
    clearInterval(this.state.intervalId);
    this.setState({
      editIcon: !this.state.editIcon,
      availableToStartFlag: true,
    });
  };

  timerStart = () => {
    if (this.state.availableToStartFlag) {
      const interval = setInterval(() => {
        const {
          secondsInput,
          minutesInput,
          hoursInput,
          availableToStartFlag,
        } = this.state;

        const secondsInputToNumber = Number(secondsInput);
        const minutesInputToNumber = Number(minutesInput);
        const hoursInputToNumber = Number(hoursInput);
        if (secondsInputToNumber > 0) {
          this.setState({
            secondsInput: secondsInputToNumber - 1,
          });
        }
        if (secondsInputToNumber === 0 && minutesInputToNumber > 0) {
          this.setState({
            secondsInput: 59,
            minutesInput: minutesInputToNumber - 1,
          });
        }
        if (
          secondsInputToNumber === 0 &&
          minutesInputToNumber === 0 &&
          hoursInputToNumber > 0
        ) {
          this.setState({
            secondsInput: 59,
            minutesInput: 59,
            hoursInput: hoursInputToNumber - 1,
          });
        }
        document.title = `${
          this.state.stopWatchVisibility
            ? (document.title = "TIME IS UP")
            : (document.title = `${`${
                hoursInput <= 9 ? `0${hoursInput}` : hoursInput
              }`}:${`${
                minutesInput <= 9 ? `0${minutesInput}` : minutesInput
              }`}:${`${
                secondsInput <= 9 ? `0${secondsInput}` : secondsInput
              }`}`)
        }`;
        if (
          hoursInputToNumber === 0 &&
          minutesInputToNumber === 0 &&
          secondsInputToNumber === 0 &&
          !availableToStartFlag
        ) {
          const alarmSound = document.querySelector("audio");
          alarmSound.play();
          this.setState({
            availableToStartFlag: !availableToStartFlag,
            stopWatchVisibility: true,
          });
        }
      }, 1000);
      this.setState({
        intervalId: interval,
        availableToStartFlag: !this.state.availableToStartFlag,
      });
    } else {
      clearInterval(this.state.intervalId);
      this.setState({
        availableToStartFlag: !this.state.availableToStartFlag,
      });
    }
  };

  resetTimer = () => {
    clearInterval(this.state.intervalId);
    document.title = "Timer With Alarm";
    this.setState({
      hoursInput: 0,
      minutesInput: 0,
      secondsInput: 0,
      editIcon: true,
      availableToStartFlag: true,
    });
  };

  hideStopWatch = () => {
    const alarmSound = document.querySelector("audio");
    alarmSound.pause();
    document.title = `Timer With Alarm`;
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
      availableToStartFlag,
      stopWatchVisibility,
    } = this.state;
    return (
      <div className={styles.timer}>
        <Input
          editIcon={editIcon}
          secondsInput={hoursInput}
          name="hoursInput"
          text="Hours"
          handleInputChange={this.handleInputChange}
        />
        <Input
          editIcon={editIcon}
          secondsInput={minutesInput}
          name="minutesInput"
          text="Minutes"
          handleInputChange={this.handleInputChange}
        />
        <Input
          editIcon={editIcon}
          secondsInput={secondsInput}
          name="secondsInput"
          text="Seconds"
          handleInputChange={this.handleInputChange}
        />
        <HandleIcon
          editIcon={editIcon}
          secondsInput={secondsInput}
          minutesInput={minutesInput}
          hoursInput={hoursInput}
          availableToStartFlag={availableToStartFlag}
          stopWatchVisibility={stopWatchVisibility}
          handleEditIcon={this.handleEditIcon}
          timerStart={this.timerStart}
          resetTimer={this.resetTimer}
        />
        <AlertIcon
          stopWatchVisibility={stopWatchVisibility}
          hideStopWatch={this.hideStopWatch}
        />
      </div>
    );
  }
}

export default Timer;
