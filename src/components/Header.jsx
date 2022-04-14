import React from "react";
import styles from "../styles/Header.module.css";
import { GiWaterDrop } from "react-icons/gi";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <GiWaterDrop className={styles.icon} />
        <div className={styles.text}>
          <p className={styles.text1}>PongDang</p>
          <p className={styles.text2}>한강 수온 측정 웹, 퐁당</p>
        </div>
      </div>
      <div className={styles.contents}>
        <p>Temperature</p>
        <p>explanation</p>
        <p>developer</p>
      </div>
    </header>
  );
}

export default Header;
