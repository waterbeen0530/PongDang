import styled from "@emotion/styled";
import { bannerDocs } from "docs/bannerDocs";
import { colorsType } from "util/interface/banner";
import { buttonsType } from "util/interface/banner";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCallback, useRef } from "react";
import { nextbutton } from "assets";

export default function Banner() {
  const slickRef = useRef<Slider>(null);

  const prevEvent = useCallback(() => {
    if (slickRef && slickRef.current) {
      slickRef.current.slickPrev();
    }
  }, []);

  const nextEvent = useCallback(() => {
    if (slickRef && slickRef.current) {
      slickRef.current.slickNext();
    }
  }, []);

  const SampleNextArrow = () => {
    return <NextBtn onClick={nextEvent} />;
  };

  const SamplePrevArrow = () => {
    return <PrevBtn onClick={prevEvent} />;
  };

  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Page>
      <StyledSlider {...settings} ref={slickRef}>
        {bannerDocs.map((banner, i) => (
          <Container key={i} bgColor={banner.color}>
            <Wrppaer>
              <Title>
                <h1>{banner.title}</h1>
                <p>{banner.content}</p>
                <Button textColor={banner.buttonColor}>바로가기</Button>
              </Title>
              <Image src={banner.img}></Image>
            </Wrppaer>
          </Container>
        ))}
      </StyledSlider>
      <SamplePrevArrow />
      <SampleNextArrow />
    </Page>
  );
}

const Page = styled.section`
  width: 100%;
  height: fit-content;
  // overflow-x: hidden;
  position: relative;
`;

const NextBtn = styled.div`
  background-image: url(${nextbutton});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 30px;
  height: 30px;
  cursor: pointer;

  position: absolute;
  top: 50%;
  transform: translate(0px, -50%);
  right: 120px;
  color: #fff;
`;

const PrevBtn = styled(NextBtn)`
  transform: translate(0px, -50%) rotate(180deg);
  right: 0px;
  left: 120px;
`;

const Container = styled.div`
  width: 100vw;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }: { bgColor: colorsType }) => bgColor};
`;

const Wrppaer = styled.div`
  width: 65%;
  height: 80%;
  display: flex;
  margin: 0 auto;
  margin-top: 40px;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  h1 {
    margin: 0;
    white-space: pre-wrap; // 이스케이프 문자 적용
    color: #fff;
    line-height: 65px;
    font-size: 44px;
  }
  p {
    margin: 10px 0 50px 0;
    font-size: 22px;
    color: #fff;
  }
`;

const Button = styled.button`
  width: 130px;
  height: 38px;
  outline: none;
  border-radius: 20px;
  font-weight: 700;
  border: 1.5px solid
    ${({ textColor }: { textColor: buttonsType }) => textColor};
  color: ${({ textColor }: { textColor: buttonsType }) => textColor};
`;

const Image = styled.img`
  height: 70%;
  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.25);
`;

const StyledSlider = styled(Slider)`
  overflow-x: hidden;
  /* width: 100vw; */
  .slick-slide > div {
    outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
  }
  .slick-dots > li {
    width: fit-content;
    height: fit-content;
    margin: 0;
  }
  .slick-dots > li.slick-active span {
    filter: grayscale(0);
    transform: scale(1.3);
  }
`;
