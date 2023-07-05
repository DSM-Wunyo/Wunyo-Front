import { styled } from "styled-components";

export default function Rank() {
  return (
    <Container>
      <Box>
        <Box1>
          <Number>1.</Number>
          <RankImg src="/main/music.png"></RankImg>
          <Wrapper>
            <Hobby>취미 : 음악 감상</Hobby>
            <Percent>전체 비율 : 21.0%</Percent>
          </Wrapper>
        </Box1>
        <Box2>
          <Number>2.</Number>
          <RankImg src="/main/music.png"></RankImg>
          <Wrapper>
            <Hobby>취미 : 음악 감상</Hobby>
            <Percent>전체 비율 : 21.0%</Percent>
          </Wrapper>
        </Box2>
        <Box3>
          <Number>3.</Number>
          <RankImg src="/main/music.png"></RankImg>
          <Wrapper>
            <Hobby>취미 : 음악 감상</Hobby>
            <Percent>전체 비율 : 21.0%</Percent>
          </Wrapper>
        </Box3>
      </Box>
    </Container>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Percent = styled.p`
  margin: 0;
  margin-top: 10px;
  margin-left: 30px;
  font-size: 25px;
`;

const Hobby = styled.p`
  margin: 0;
  margin-left: 30px;
  font-size: 25px;
`;

const RankImg = styled.img`
  width: 130px;
  height: 130px;
  margin-left: 30px;
`;

const Number = styled.p`
  font-size: 60px;
  margin-left: 10px;
`;

const Box3 = styled.div`
  width: 1400px;
  height: 150px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Box2 = styled.div`
  width: 1400px;
  height: 150px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Box1 = styled.div`
  width: 1400px;
  height: 150px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;

const Container = styled.div`
  background-color: #ff9128;
  width: 100%;
  height: 690px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
