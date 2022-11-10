import styled from "@emotion/styled";
import logo from "../../assets/img/logo.svg";

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Image src={logo}></Image>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const Wrapper = styled.div`
  width: 70%;
`;

const Image = styled.img``;
