import React, { useState } from "react";
import styles from "../styles/Explanation.module.css";
import { GrSearchAdvanced } from "react-icons/gr";

function Explanation() {
  const [titles, setTitles] = useState([
    {
      id: 1,
      hText: "한강의 기적",
      sText:
        "6·25전쟁 이후 부터 아시아 금융 위기 시기 까지 반세기에 이르는 급격한 한국 경제 성장의 상징.",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnuol0iGuiPIq8PJq2grHX7Fn6nfC3In3JDhseYGhGC3IfVlUODieqWssocDMwMob8NV0&usqp=CAU",
    },
    {
      id: 2,
      hText: "한국의 아름다운 강",
      sText: "친구, 연인, 가족들의 소풍 성지!",
      poster:
        "https://cdn.crowdpic.net/detail-thumb/thumb_d_D7014A32E2C0FC26CA7DF1F70330BA31.jpg",
    },
    {
      id: 3,
      hText: "눈",
      sText: "문어는 역시 우주문어가 최고입니다.",
      poster: "http://www.me.go.kr/hg/file/preview.do?fileId=206800&fileSeq=1",
    },
  ]);

  const titleList = titles.map((title) => (
    <li>
      <img src={title.poster} />
      <h1>{title.hText}</h1>
      <p>{title.sText}</p>
    </li>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <h1>EXPLANATION</h1>
        <p>
          한강은 한반도 중부에 위치한 강으로, 대한민국의 국가 1급 하천 입니다.
        </p>
      </div>
      <ul>{titleList}</ul>
    </div>
  );
}

export default Explanation;