import React, { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Result = () => {
  const [result, setResult] = useState({
    resultID: 6,
    hobby: "독서",
    content: "책을 읽어 마음의 소양을 기릅니다",
    img: "/imgs/togetherMountain.png",
  });
  const getImage = () => {
    switch (result.resultID) {
      case 1:
        return "/imgs/swim.png";
      case 2:
        return "/imgs/skateBoard.jpg";
      case 3:
        return "/imgs/bike.png";

      case 4:
        return "/imgs/jogging.jpg";

      case 5:
        return "/imgs/swim.png";

      case 6:
        return "/imgs/yoga.png";

      case 7:
        return "/imgs/mountain.jpg";

      case 8:
        return "/imgs/walking.jpg";

      case 9:
        return "/imgs/swim.png";

      case 10:
        return "/imgs/readingBook.png";

      case 11:
        return "/imgs/puzzle.jpg";

      case 12:
        return "/imgs/drawing.avif";

      case 13:
        return "/imgs/watchMovie.jpg";

      case 14:
        return "/imgs/jasu.jpg";

      case 15:
        return "/imgs/gongYe.jpg";

      case 16:
        return "/imgs/drama.jpg";

      case 17:
        return "/imgs/ddegaejil.avif";

      case 18:
        return "/imgs/listenMusic.png";

      case 19:
        return "/imgs/soccer.png";

      case 20:
        return "/imgs/baseball.png";

      case 21:
        return "/imgs/volleyball.png";

      case 22:
        return "/imgs/football.png";

      case 23:
        return "/imgs/tableTennis.png";

      case 24:
        return "/imgs/soccer.png";

      case 25:
        return "/imgs/danggu.png";

      case 26:
        return "/imgs/maraton.png";

      case 27:
        return "/imgs/togetherMountain.png";

      case 28:
        return "/imgs/boardgame.png";

      case 29:
        return "/imgs/watchMusical.png";

      case 30:
        return "/imgs/shopping.png";

      case 31:
        return "/imgs/hwatu.png";

      case 32:
        return "/imgs/watchSprots.png";

      case 33:
        return "/imgs/shopping.png";

      case 34:
        return "/imgs/baduk.png";

      case 35:
        return "/imgs/hwatu.png";

      case 36:
        return "/imgs/janggi.png";

      default:
        return "/imgs/art.jpeg";
    }
  };

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
