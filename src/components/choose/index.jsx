import { styled } from "styled-components";
import Question from "./question";

const Choose = () => {
  const question = [
    {
      number: 1,
      title: "당신은 사교적인 성격이라고 생각하시나요?",
      type: "active",
      score: 0,
    },
    {
      number: 2,
      title: "당신은 사교적인 성격이라고 생각하시나요?",
      type: "active",
      score: 0,
    },
    {
      number: 3,
      title: "당신은 사교적인 성격이라고 생각하시나요?",
      type: "active",
      score: 0,
    },
    {
      number: 4,
      title: "당신은 사교적인 성격이라고 생각하시나요?",
      type: "active",
      score: 0,
    },
    {
      number: 5,
      title: "당신은 사교적인 성격이라고 생각하시나요?",
      type: "active",
      score: 0,
    },
  ];

  return (
    <Container>
      <Questions>
        {question.map((arr, i) => (
          <Question key={i} arr={arr}></Question>
        ))}
      </Questions>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 2500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Questions = styled.div`
  width: 55%;
  height: 2200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export default Choose;
