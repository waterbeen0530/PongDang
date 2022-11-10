import styled from "@emotion/styled";
import search from "../assets/img/Search/search.svg";
import { ChangeEvent, useState } from "react";
import { getBookApi } from "util/api/bookApi";
import { bookType } from "util/interface/book";

export default function BookSearch() {
  const [title, setTitle] = useState<string>("");
  const [bookData, setBookData] = useState<bookType[]>([]);

  const getData = async () => {
    const res = await getBookApi(title);
    setBookData(res);
  };

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setTitle(value);
  };

  return (
    <Container>
      <Wrapper>
        <Title>책의 제목, 저자 등을 검색해보세요!</Title>
        <Search>
          <input
            onChange={change}
            value={title}
            placeholder="찾고 싶은 책을 검색해보세요."
          />
          <img src={search} onClick={getData} />
        </Search>
      </Wrapper>
      <div>
        {bookData.map((book, i) => (
          <p key={i}>{book.title}</p>
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 30px;
`;

const Search = styled.div`
  position: relative;
  input {
    width: 500px;
    height: 46px;
    padding-left: 20px;
    border-radius: 30px;
    border: 1.2px solid #000;
    font-size: 16px;
    background-color: #f8f9fa;
  }
  img {
    position: absolute;
    top: 12px;
    right: 20px;
    width: 4.5%;
    cursor: pointer;
  }
`;
