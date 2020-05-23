import React from "react";
import Timer from "./Timer/Timer";
import styles from "../css/style.module.css";

function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.title}>TIMER</h1>
      <Timer />
    </div>
  );
}

export default App;
