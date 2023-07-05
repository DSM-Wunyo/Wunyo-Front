import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Information() {
  const [sex, setSex] = useState(null);

  return (
    <Container>
      <Frame>
        <Wrapper>
          <Text>신상 정보 입력</Text>
          <Info>
            <Name placeholder="성명"></Name>
            <Sex>
              <Man
                onClick={() => {
                  setSex("MALE");
                }}
                style={{
                  color: sex === "MALE" ? "white" : "black",
                  backgroundColor: sex === "MALE" ? "#ff9128" : "white",
                }}
              >
                남
              </Man>
              <Woman
                onClick={() => {
                  setSex("FEMALE");
                }}
                style={{
                  color: sex === "FEMALE" ? "white" : "black",
                  backgroundColor: sex === "FEMALE" ? "#ff9128" : "white",
                }}
              >
                여
              </Woman>
            </Sex>
            <Date>
              <Year placeholder="년"></Year>
              <Month placeholder="월"></Month>
              <Day placeholder="일"></Day>
            </Date>
          </Info>
        </Wrapper>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Before>{"<- 이전"}</Before>
        </Link>
        <Link to="/choose" style={{ textDecoration: "none" }}>
          <Next>{"다음 ->"}</Next>
        </Link>
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
  bottom: 20px;
  right: 20px;
`;
const Before = styled.p`
  position: absolute;
  font-size: 25px;
  color: #ff9128;
  bottom: 20px;
  left: 20px;
`;
const Day = styled.input`
  padding: 0px 18px 0px 18px;
  width: 100px;
  height: 60px;
  border: 3px solid #ff9128;
  border-radius: 20px;
  font-size: 18px;
`;
const Month = styled.input`
  padding: 0px 18px 0px 18px;
  width: 100px;
  height: 60px;
  border: 3px solid #ff9128;
  border-radius: 20px;
  font-size: 18px;
`;
const Year = styled.input`
  padding: 0px 18px 0px 18px;
  width: 100px;
  height: 60px;
  border: 3px solid #ff9128;
  border-radius: 20px;
  font-size: 18px;
`;
const Woman = styled.button`
  width: 165px;
  height: 60px;
  border: 3px solid #ff9128;
  border-left: 0px;
  border-radius: 0px 20px 20px 0px;
  font-size: 18px;
`;
const Man = styled.button`
  width: 165px;
  height: 60px;
  border: 3px solid #ff9128;
  border-radius: 20px 0px 0px 20px;
  font-size: 18px;
  background-color: white;
`;
const Name = styled.input`
  padding: 0px 18px 0px 18px;
  width: 330px;
  height: 60px;
  border: 3px solid #ff9128;
  border-radius: 20px;
  font-size: 18px;
`;
const Text = styled.p`
  font-size: 27px;
  margin-top: 0px;
  margin-bottom: 80px;
  font-size: 30px;
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
  height: 780px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
