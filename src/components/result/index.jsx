import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Result = () => {
  const [result, setResult] = useState({
    resultID: 0,
    hobby: "",
    content: "",
    img: "",
  });
  useEffect(() => {
    let obj = result;
    switch (result.resultID) {
      case 0:
        obj.img = "/imgs/art.jpeg";
        setResult(obj);
        break;
      case 1:
        obj.img = "/imgs/swim.png";
        setResult(obj);
        break;
      case 2:
        obj.img = "/imgs/skateBoard.jpg";
        setResult(obj);
        break;
      case 3:
        obj.img = "/imgs/bike.png";
        setResult(obj);
        break;
    }
  }, [result]);

  return (
    <Container>
      <Title>{`추천 취미 : ${result.hobby}`}</Title>
      <Image src={result.img} />
      <Content>{`해석 : ${result.content}`}</Content>
      <ButtonContainer>
        <Link to="/rank" style={{ textDecoration: "none" }}>
          <RankButton>순위</RankButton>
        </Link>
        <Link to="/rank" style={{ textDecoration: "none" }}>
          <HobbyButton>취미 알아보기</HobbyButton>
        </Link>
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
  display: flex;
  flex-direction: row;
`;
const RankButton = styled.p`
  display: flex;
  width: 170px;
  height: 70px;
  color: #ff8d20;
  border: 3px solid #ff8d20;
  border-radius: 35px;
  font-size: 25px;
  background-color: white;
  margin-right: 27px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
const HobbyButton = styled.p`
  display: flex;
  text-align: center;
  width: 170px;
  height: 70px;
  color: #fff;
  border: 3px solid #ff8d20;
  border-radius: 35px;
  font-size: 20px;
  background-color: #ff8d20;
  align-items: center;
  justify-content: center;
`;

export default Result;
