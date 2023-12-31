import { styled } from "styled-components";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <Container>
      <Bubble>
        <BubbleImg src="/main/bubble.png"></BubbleImg>
        <BubbleFrame>
          <BubbleText>
            <BubbleTitle>나의 심리 상태는?</BubbleTitle>
            <BubbleDetail>심리테스트</BubbleDetail>
          </BubbleText>
          <Link to="/information" style={{ textDecoration: "none" }}>
            <BubbleStart>시작하기</BubbleStart>
          </Link>
        </BubbleFrame>
      </Bubble>
      <Human src="/main/human.png"></Human>
    </Container>
  );
}
const BubbleTitle = styled.p`
  font-size: 70px;
  margin: 0px;
`;

const BubbleDetail = styled.p`
  font-size: 45px;
  margin: 0px;
`;

const BubbleStart = styled.p`
  font-size: 35px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  color: #ff9128;
  text-decoration: underline;
`;

const BubbleText = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BubbleFrame = styled.div`
  z-index: 1;
  height: 200px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const BubbleImg = styled.img`
  position: absolute;
  width: 800px;
  height: 350px;
`;

const Bubble = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-family: "BMJUA";
`;

const Human = styled.img`
  width: 400px;
  position: fixed;
  bottom: 0;
  left: 0;
`;

const Container = styled.div`
  background-color: #ff9128;
  height: 740px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
