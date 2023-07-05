import { styled } from "styled-components";
import Question from "./question";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Choose = () => {
  const question = [
    {
      number: 1,
      title:
        "당신은 일상 생활에서 자주 운동하거나 활동적인 활동을 즐기는 편인가요?",
      type: "active",
    },
    {
      number: 2,
      title: "당신은 사교적인 성격이라고 생각하시나요?",
      type: "active",
    },
    {
      number: 3,
      title:
        "당신은 주말이나 휴가 때 활동적인 액티비티를 찾아 다니는 편인가요?",
      type: "active",
    },
    {
      number: 4,
      title:
        "당신은 친구들과 함께 모임이나 파티에서 활발하게 참여하는 편인가요?",
      type: "active",
    },
    {
      number: 5,
      title: "당신은 여행이나 모험을 좋아하여 새로운 장소를 탐험하는 편인가요?",
      type: "active",
    },
    {
      number: 6,
      title: "당신은 일을 할 때 자주 움직이거나 활발하게 움직이는 편인가요?",
      type: "active",
    },
    {
      number: 7,
      title:
        "당신은 사회적인 모임이나 동호회에 참여하여 활동적으로 시간을 보내는 편인가요?",
      type: "active",
    },
    {
      number: 8,
      title:
        "당신은 일상적인 과제나 업무를 처리할 때 빠르게 움직이고 신속하게 해결하는 편인가요?",
      type: "active",
    },
    {
      number: 9,
      title:
        "당신은 스포츠나 경기를 관람하거나 참여하는 것을 좋아하는 편인가요?",
      type: "active",
    },
    {
      number: 10,
      title: "당신은 야외 활동이나 자연과 교감하는 것을 즐기는 편인가요?",
      type: "active",
    },
    {
      number: 11,
      title: "당신은 혼자 시간을 보내는 것을 즐기는 편인가요? ",
      type: "solo",
    },
    {
      number: 12,
      title:
        "당신은 예술적인 활동(그림 그리기, 음악, 글쓰기 등)을 즐기는 편인가요?",
      type: "solo",
    },
    {
      number: 13,
      title: "당신은 자연과 교감하는 활동을 좋아하나요?",
      type: "solo",
    },
    {
      number: 14,
      title: "당신은 독서나 영화 감상과 같은 문화적인 활동을 즐기는 편인가요?",
      type: "solo",
    },
    {
      number: 15,
      title: "당신은 여행이나 새로운 장소를 탐험하는 것을 좋아하나요?",
      type: "solo",
    },
    {
      number: 16,
      title: "당신은 사회봉사나 자선활동에 참여하는 것을 좋아하나요?",
      type: "solo",
    },
    {
      number: 17,
      title: "당신은 운동이나 체육 활동을 즐기는 편인가요?",
      type: "solo",
    },
    {
      number: 18,
      title: "당신은 음식 만들기나 요리에 흥미가 있는 편인가요?",
      type: "solo",
    },
    {
      number: 19,
      title: "당신은 음악을 감상하거나 악기를 연주하는 것을 즐기는 편인가요?",
      type: "solo",
    },
    {
      number: 20,
      title: "당신은 새로운 지식을 습득하거나 학습하는 것을 좋아하나요?",
      type: "solo",
    },
    {
      number: 21,
      title: "지금은 기쁨과 만족감을 느끼는 편인가요?",
      type: "",
    },
    {
      number: 22,
      title: "현재는 불안 또는 걱정으로 인해 불편한 기분인가요?",
      type: "",
    },
    {
      number: 23,
      title: "지금은 슬픔이나 우울함으로 인해 기분이 안 좋은 편인가요?",
      type: "",
    },
    {
      number: 24,
      title: "현재는 피곤함이나 지침으로 인해 힘들게 느끼는 편인가요?",
      type: "",
    },
    {
      number: 25,
      title: "지금은 화나거나 짜증을 느끼는 상태인가요?",
      type: "",
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
        <Link to="/result" style={{ textDecoration: "none" }}>
          <After>결과보러가기</After>
        </Link>
      </Button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 10500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 100px;
`;
const Questions = styled.div`
  width: 60%;
  height: 10000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
const Button = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const After = styled.p`
  width: 400px;
  height: 150px;
  border: 3px solid #ff9128;
  border-radius: 110px;
  color: #ff9128;
  font-family: "BMJUA";
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 50px;
`;

export default Choose;
