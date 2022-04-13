import React from "react";
import styles from "../styles/Header.module.css";
import { GiWaterDrop } from "react-icons/gi";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <GiWaterDrop className={styles.icon} />
        <p>PongDang</p>
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
