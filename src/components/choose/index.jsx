import { styled } from "styled-components";
import Question from "./question";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Choose = () => {
  const question = [
    {
      number: 1,
      title: "당신은 사교적인 성격이라고 생각하시나요?",
      type: "active",
    },
    {
      number: 2,
      title: "당신은 사교적인 성격이라고 생각하시나요?",
      type: "active",
    },
    {
      number: 3,
      title: "당신은 사교적인 성격이라고 생각하시나요?",
      type: "solo",
    },
    {
      number: 4,
      title: "당신은 사교적인 성격이라고 생각하시나요?",
      type: "active",
    },
    {
      number: 5,
      title: "당신은 사교적인 성격이라고 생각하시나요?",
      type: "solo",
    },
  ];

  const [activeScore, setActiveScore] = useState(0);
  const [soloScore, setSoloScore] = useState(0);

  return (
    <Container>
      <Questions>
        {question.map((arr, i) => (
          <Question
            key={i}
            arr={arr}
            activeScore={activeScore}
            setActiveScore={setActiveScore}
            soloScore={soloScore}
            setSoloScore={setSoloScore}
          />
        ))}
      </Questions>
      <Button>
        <Before>&lt;-이전</Before>
        <Link to="/result" style={{ textDecoration: "none" }}>
          <After>다음-&gt;</After>
        </Link>
      </Button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 2700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 100px;
`;
const Questions = styled.div`
  width: 60%;
  height: 2200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
const Button = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Before = styled.p`
  color: #ff9128;
  font-family: "BMJUA";
  font-size: 50px;
`;
const After = styled.p`
  color: #ff9128;
  font-family: "BMJUA";
  font-size: 50px;
`;

export default Choose;
