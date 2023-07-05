import { styled } from "styled-components";
import { useState } from "react";

const Question = ([
  { arr },
  activeScore,
  setActiveScore,
  soloScore,
  setSoloScore,
]) => {
  const [textColor, setTextColor] = useState(0);
  const circleOnclick = (num) => {
    setTextColor(num);
    if (arr.type === "active") {
      const number = activeScore + num;
      setActiveScore(number);
    } else if (arr.type === "solo") {
      const number = soloScore + num;
      setSoloScore(number);
    }
  };

  return (
    <Container>
      <Title>
        {arr.number}. {arr.title}
      </Title>
      <Circles>
        <XXLCircle
          style={{
            backgroundColor: textColor === 1 ? "#ff9128" : "white",
          }}
          onClick={() => circleOnclick(1)}
        ></XXLCircle>
        <XLCircle
          style={{
            backgroundColor: textColor === 2 ? "#ff9128" : "white",
          }}
          onClick={() => circleOnclick(2)}
        ></XLCircle>
        <LCircle
          style={{
            backgroundColor: textColor === 3 ? "#ff9128" : "white",
          }}
          onClick={() => circleOnclick(3)}
        ></LCircle>
        <SCircle
          style={{
            backgroundColor: textColor === 4 ? "#ff9128" : "white",
          }}
          onClick={() => circleOnclick(4)}
        ></SCircle>
        <LCircle
          style={{
            backgroundColor: textColor === 5 ? "#ff9128" : "white",
          }}
          onClick={() => circleOnclick(5)}
        ></LCircle>
        <XLCircle
          style={{
            backgroundColor: textColor === 6 ? "#ff9128" : "white",
          }}
          onClick={() => circleOnclick(6)}
        ></XLCircle>
        <XXLCircle
          style={{
            backgroundColor: textColor === 7 ? "#ff9128" : "white",
          }}
          onClick={() => circleOnclick(7)}
        ></XXLCircle>
      </Circles>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.p`
  font-family: "BMJUA";
  font-size: 50px;
  text-align: center;
`;
const Circles = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const XXLCircle = styled.div`
  width: 120px;
  height: 120px;
  background-color: white;
  border: 3px solid #ff9128;
  border-radius: 50%;
`;
const XLCircle = styled.div`
  width: 90px;
  height: 90px;
  background-color: white;
  border: 3px solid #ff9128;
  border-radius: 50%;
`;
const LCircle = styled.div`
  width: 65px;
  height: 65px;
  background-color: white;
  border: 3px solid #ff9128;
  border-radius: 50%;
`;
const SCircle = styled.div`
  width: 45px;
  height: 45px;
  background-color: white;
  border: 3px solid #ff9128;
  border-radius: 50%;
`;

export default Question;
