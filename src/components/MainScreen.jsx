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

  return <div className={styles.hangang}>{hangangData.temp}℃</div>;
};

export default MainScreen;
