import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo src="/imgs/Logo.png"></Logo>
        <Info>
          <GoTest>테스트하기</GoTest>
          <GoResult>결과보기</GoResult>
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
  color: #ff9128;
`;
