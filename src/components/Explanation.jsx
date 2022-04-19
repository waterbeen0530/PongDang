import React, { useState, useRef } from "react";
import styled from "styled-components";
import styles from "../styles/Explanation.module.css";
import { GrSearchAdvanced } from "react-icons/gr";

const Container = styled.div`
  width: 100%;
  height: 120%;
  padding: 120px 120px 0px 120px;
  background: linear-gradient(#5c7280 30%, #91b5c9);
`;

function Explanation() {
  const [titles, setTitles] = useState([
    {
      id: 1,
      hText: "한강의 기적",
      sText: "급격한 한국 경제 성장의 상징.",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnuol0iGuiPIq8PJq2grHX7Fn6nfC3In3JDhseYGhGC3IfVlUODieqWssocDMwMob8NV0&usqp=CAU",
    },
    {
      id: 2,
      hText: "살아숨쉬는 역사",
      sText: "과거부터 현재까지 남아있는 역사의 산물",
      poster: "http://www.me.go.kr/hg/file/preview.do?fileId=206800&fileSeq=1",
    },
    {
      id: 3,
      hText: "아름다운 관광 명소",
      sText: "친구, 연인, 가족들의 나들이 성지",
      poster:
        "https://cdn.crowdpic.net/detail-thumb/thumb_d_D7014A32E2C0FC26CA7DF1F70330BA31.jpg",
    },
  ]);

  const [isHidden, setIsHidden] = useState(true);

  const titleList = titles.map((title) => (
    <li>
      <div
        onMouseEnter={() => setIsHidden(false)}
        onMouseLeave={() => setIsHidden(true)}
        className={styles.img}
        style={{ backgroundImage: `url( ${title.poster})` }}
      ></div>
      <GrSearchAdvanced
        style={{ opacity: `${isHidden ? "0" : "1"}` }}
        className={styles.search}
      />
      <h1>{title.hText}</h1>
      <p>{title.sText}</p>
    </li>
  ));

  return (
    <Container className={styles.cotainer}>
      <div className={styles.contents}>
        <h1>EXPLANATION</h1>
        <p>
          한강은 한반도 중부에 위치한 강으로, 대한민국의 국가 1급 하천 입니다.
        </p>
      </div>
      <ul>{titleList}</ul>
    </Container>
  );
}

export default Explanation;
