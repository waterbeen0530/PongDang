import React, { useState } from "react";
import styles from "../styles/MainScreen.module.css";
import axios from "axios";

const MainScreen = () => {
  const [hangangData, setHangrangData] = useState({});

  axios
    .request({
      url: "https://api.hangang.msub.kr",
      method: "GET",
    })
    .then((res) => {
      setHangrangData(res.data);
    });

  return (
    <div className={styles.containar}>
      <p className={styles.Hangang}>{hangangData.temp}℃</p>
      <p className={styles.option}>
        {hangangData.station}에서 {hangangData.time}에 측정된 자료 입니다.
      </p>
    </div>
  );
};
export default MainScreen;
