import { styled } from "styled-components";
import Header from "../header";

export default function Main() {
  return (
    <Container>
      <Header />
      <Bubble>
        <BubbleImg src="/main/bubble.png"></BubbleImg>
        <BubbleFrame>
          <BubbleText>
            <BubbleTitle>나의 심리 상태는?</BubbleTitle>
            <BubbleDetail>심리테스트</BubbleDetail>
          </BubbleText>
          <BubbleStart>시작하기</BubbleStart>
        </BubbleFrame>
      </Bubble>
      <Human src="/main/human.png"></Human>
    </Container>
  );
}
const BubbleTitle = styled.p`
  font-size: 50px;
  margin: 0px;
`;

const BubbleDetail = styled.p`
  font-size: 25px;
  margin: 0px;
`;

const BubbleStart = styled.p`
  font-size: 30px;
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
  width: 100%;
  height: 690px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
