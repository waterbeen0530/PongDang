import styled from "@emotion/styled";
import search from "../assets/img/Search/search.svg";
import { ChangeEvent, useState } from "react";
import { getBookApi } from "util/api/bookApi";
import { bookType } from "util/interface/book";
import { ListFormat } from "typescript";

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
      <SearchList>
        {bookData.map((book, i) => (
          <Book>
            <img src={book.thumbnail} key={i} />
            <BookText>
              <h4>{book.title}</h4>
              <Info>
                <p>{book.authors}</p>
                <p>/</p>
                <p>{book.publisher}</p>
              </Info>
              <Price>
                <p>{book.price}원</p>
                <p>{book.sale_price}원</p>
              </Price>
              <p>{book.contents}..</p>
            </BookText>
          </Book>
        ))}
      </SearchList>
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
  margin-bottom: 100px;
  input {
    width: 500px;
    height: 46px;
    padding-left: 20px;
    border-radius: 30px;
    border: 1.2px solid #000;
    outline: none;
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

const SearchList = styled.div`
  width: 60vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Book = styled.div`
  width: 100%;
  padding: 40px 0;
  border-top: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img {
    width: 130px;
    height: 180px;
    margin-right: 20px;
    border: 0.5px solid #000;
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));
  }
`;

const BookText = styled.div`
  h4 {
    margin: 0 0 16px;
    font-size: 20px;
  }
  p {
    margin: 0 0 12px;
  }
  & > p {
    width: 70%;
    font-size: 10px;
  }
`;

const Info = styled.div`
  width: 100%;
  gap: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
`;

const Price = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
  p {
    margin-top: 10px;
    &:first-child {
      font-weight: 600;
    }
    &:last-child {
      font-size: 13px;
      text-decoration: line-through;
      color: #787e84;
    }
  }
`;
