import React from "react";
import Bridge from "../components/Bridge";
import Explanation from "../components/Explanation";
import Header from "../components/Header";
import MainScreen from "../components/MainScreen";

function Home() {
  return (
    <>
      <Header />
      <MainScreen />
      <Explanation />
      <Bridge />
    </>
  );
}

export default Home;
