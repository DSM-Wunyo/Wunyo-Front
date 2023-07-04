import React from "react";
import { styled } from "styled-components";

const Result = () => {
  return (
    <Container>
      <Title>{`추천 취미 : 미술`}</Title>
      <Image src="./imgs/art.jpeg" />
      <Content>
        해석 : 화려하고 모두에게 인기가 많으며
        <br />
        기능이 간단한 앱을 좋아해요.
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Title = styled.p`
  font-size: 40px;
  margin-bottom: 20px;
`;
const Image = styled.img`
  width: 500px;
  height: 350px;
`;
const Content = styled.p`
  font-size: 30px;
  text-align: center;
  margin-top: 40px;
`;

export default Result;
