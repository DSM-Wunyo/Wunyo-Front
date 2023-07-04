import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

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
      <ButtonContainer>
        <Link to="/rank">
          <RankButton>순위</RankButton>
        </Link>
        <HobbyButton>취미 알아보기</HobbyButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: "BMJUA";
`;
const Title = styled.p`
  font-size: 40px;
  margin-bottom: 20px;
  color: #ff8d20;
`;
const Image = styled.img`
  width: 500px;
  height: 350px;
`;
const Content = styled.p`
  font-size: 30px;
  text-align: center;
  margin-top: 40px;
  color: #ff8d20;
`;
const ButtonContainer = styled.div`
  margin-top: 30px;
`;
const RankButton = styled.button`
  width: 170px;
  height: 70px;
  color: #ff8d20;
  border: 3px solid #ff8d20;
  border-radius: 35px;
  font-size: 25px;
  background-color: white;
  margin-right: 27px;
`;
const HobbyButton = styled.button`
  text-align: center;
  width: 170px;
  height: 70px;
  color: #fff;
  border: 3px solid #ff8d20;
  border-radius: 35px;
  font-size: 20px;
  background-color: #ff8d20;
`;

export default Result;
