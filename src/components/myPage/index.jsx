import React from "react";
import { styled } from "styled-components";
import BeforeResultCard from "./card/BeforeResultCard";

const MyPage = () => {
  return (
    <Container>
      <BeforeResultText>이전 결과</BeforeResultText>
      <CardContainer>
        <BeforeResultCard />
        <BeforeResultCard />
        <BeforeResultCard />
        <BeforeResultCard />
        <BeforeResultCard />
        <BeforeResultCard />
        <BeforeResultCard />
        <BeforeResultCard />
      </CardContainer>
    </Container>
  );
};

const Container = styled.body`
  background-color: orange;
  flex-direction: column;
  width: 100%;
  padding: 80px 70px 80px 70px;
`;
const BeforeResultText = styled.p`
  color: white;
  font-size: 30px;
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: space-between;
`;

export default MyPage;
