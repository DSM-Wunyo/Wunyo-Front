import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function Header() {
  const [isClick, setIsClick] = useState(true);

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo src="/imgs/Logo.png"></Logo>
        </Link>
        <Info>
          <Link to="/" style={{ textDecoration: "none" }}>
            <GoTest
              style={{ color: !isClick ? "black" : "#ff9128" }}
              onClick={() => {
                setIsClick(true);
              }}
            >
              테스트하기
            </GoTest>
          </Link>
          <Link to="/myPage" style={{ textDecoration: "none" }}>
            <GoResult
              style={{ color: isClick ? "black" : "#ff9128" }}
              onClick={() => {
                setIsClick(false);
              }}
            >
              결과보기
            </GoResult>
          </Link>
        </Info>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  margin-top: 30px;
  width: 200px;
`;
const Info = styled.div`
  width: 275px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-family: "BMJUA";
  font-size: 25px;
`;
const GoTest = styled.p`
  color: black;
`;
const GoResult = styled.p`
  color: black;
`;
