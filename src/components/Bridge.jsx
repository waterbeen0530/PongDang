import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)),
    url("https://youimg1.tripcdn.com/target/100i1f000001gp4ip90F7_C_750_420.jpg_.webp?proc=source%2Ftrip");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

const Daegyo = styled.p`
  width: 270px;
  height: 70px;
  padding-right: 24px;
  color: #000;
  border-radius: 10px;
  font-size: 23px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #fff;
`;

const DaegyoList = styled.div`
  padding: 60px 60px;
`;

function Bridge() {
  const [lists, setLists] = useState([
    {
      id: 1,
      text: "일산대교",
    },
    {
      id: 2,
      text: "김포대교",
    },
    {
      id: 3,
      text: "행주대교",
    },
    {
      id: 4,
      text: "방화대교",
    },
    {
      id: 5,
      text: "마곡철교",
    },
    {
      id: 6,
      text: "가양대교",
    },
    {
      id: 7,
      text: "월드컵대교",
    },
    {
      id: 8,
      text: "성산대교",
    },
    {
      id: 9,
      text: "양화대교",
    },
    {
      id: 10,
      text: "당산철교",
    },
    {
      id: 11,
      text: "서강대교",
    },
    {
      id: 12,
      text: "마포대교",
    },
    {
      id: 13,
      text: "원효대교",
    },
    {
      id: 14,
      text: "한강철교",
    },
    {
      id: 15,
      text: "한강대교",
    },
    {
      id: 16,
      text: "노량대교",
    },
    {
      id: 17,
      text: "동작대교",
    },
    {
      id: 18,
      text: "반포대교",
    },
    {
      id: 19,
      text: "한남대교",
    },
    {
      id: 20,
      text: "동호대교",
    },
    {
      id: 21,
      text: "성수대교",
    },
    {
      id: 22,
      text: "영동대교",
    },
    {
      id: 23,
      text: "청담대교",
    },
    {
      id: 24,
      text: "잠실대교",
    },
    {
      id: 25,
      text: "잠실철교",
    },
    {
      id: 26,
      text: "올림픽대교",
    },
    {
      id: 27,
      text: "천호대교",
    },
    {
      id: 28,
      text: "광진교",
    },
    {
      id: 29,
      text: "구리암사대교",
    },
    {
      id: 30,
      text: "강동대교",
    },
    {
      id: 31,
      text: "고덕대교",
    },
    {
      id: 32,
      text: "미사대교",
    },
    {
      id: 33,
      text: "팔당대교",
    },
  ]);

  const daegyoList = lists.map((list) => <Daegyo>{list.text}</Daegyo>);

  return (
    <Container>
      <DaegyoList>{daegyoList}</DaegyoList>
    </Container>
  );
}

export default Bridge;
