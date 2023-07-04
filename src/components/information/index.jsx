import { styled } from "styled-components";

export default function Information() {
  return (
    <Container>
      <Frame>
        <Wrapper>
          <Text>신상 정보 입력</Text>
          <Info>
            <Name placeholder="성명"></Name>
            <Sex>
              <Man>남</Man>
              <Woman>여</Woman>
            </Sex>
            <Date>
              <Year placeholder="년"></Year>
              <Month placeholder="월"></Month>
              <Day placeholder="일"></Day>
            </Date>
          </Info>
        </Wrapper>
        <Next>다음 -></Next>
      </Frame>
    </Container>
  );
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 300px;
  margin-bottom: 60px;
`;

const Sex = styled.div`
  display: flex;
  flex-direction: row;
`;

const Date = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Next = styled.p`
  position: absolute;
  font-size: 25px;
  color: #ff9128;
  bottom: 10px;
  right: 20px;
`;

const Day = styled.input`
  width: 100px;
  height: 60px;
  border: 3px solid #ff9128;
  border-radius: 20px;
`;

const Month = styled.input`
  width: 100px;
  height: 60px;
  border: 3px solid #ff9128;
  border-radius: 20px;
`;

const Year = styled.input`
  width: 100px;
  height: 60px;
  border: 3px solid #ff9128;
  border-radius: 20px;
`;

const Woman = styled.button`
  width: 165px;
  height: 60px;
  border: 3px solid #ff9128;
  border-left: 0px;
  border-radius: 0px 20px 20px 0px;
`;

const Man = styled.button`
  width: 165px;
  height: 60px;
  border: 3px solid #ff9128;
  border-radius: 20px 0px 0px 20px;
`;

const Name = styled.input`
  width: 330px;
  height: 60px;
  border: 3px solid #ff9128;
  border-radius: 20px;
`;

const Text = styled.p`
  font-size: 27px;
  margin-top: 0px;
  margin-bottom: 80px;
`;

const Frame = styled.div`
  width: 900px;
  height: 620px;
  background-color: white;
  border-radius: 30px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
