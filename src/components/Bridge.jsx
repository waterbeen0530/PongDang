import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)),
    url("https://youimg1.tripcdn.com/target/100i1f000001gp4ip90F7_C_750_420.jpg_.webp?proc=source%2Ftrip");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

function BridgeList() {
  const [list, setList] = useState([
    "일산대교",
    "김포대교",
    "행주대교",
    "방화대교",
    "마곡철교",
    "가양대교",
    "월드컵대교",
    "성산대교",
    "양화대교",
    "당산철교",
    "서강대교",
    "마포대교",
    "원효대교",
    "한강철교",
    "한강대교",
    "노량대교",
    "동작대교",
    "반포대교",
    "한남대교",
    "동호대교",
    "성수대교",
    "영동대교",
    "청담대교",
    "잠실대교",
    "잠실철교",
    "올림픽대교",
    "천호대교",
    "광진교",
    "구리암사대교",
    "강동대교",
    "고덕대교",
    "미사대교",
    "팔당대교",
  ]);
}

function Bridge() {
  return (
    <Container>
      <div>
        <p>일산대교</p>
      </div>
    </Container>
  );
}

export default Bridge;
