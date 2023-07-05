import React from "react";
import { styled } from "styled-components";

const BeforeResultCard = ({ id, hobby, date }) => {
  return (
    <Container>
      <Image src={getImage(id)} />
      <Text>{`취미 : ${hobby}`}</Text>
      <Text>{`검사날짜 : ${date.slice(0, 10)}`}</Text>
    </Container>
  );
};

const getImage = (id) => {
  switch (id) {
    case 1:
    case 5:
    case 9:
      return "/imgs/swim.png";
    case 2:
      return "/imgs/skateBoard.jpg";
    case 3:
      return "/imgs/bike.png";
    case 4:
      return "/imgs/jogging.jpg";
    case 6:
      return "/imgs/yoga.png";
    case 7:
      return "/imgs/mountain.jpg";
    case 8:
      return "/imgs/walking.jpg";
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
    case 26:
      return "/imgs/danggu.png";
    case 27:
      return "/imgs/maraton.png";
    case 28:
      return "/imgs/boardgame.png";
    case 29:
      return "/imgs/watchMusical.png";
    case 30:
    case 33:
      return "/imgs/shopping.png";
    case 31:
      return "/imgs/hwatu.png";
    case 32:
      return "/imgs/watchSprots.png";
    case 34:
      return "/imgs/baduk.png";
    case 36:
      return "/imgs/janggi.png";
    default:
      return "/imgs/art.jpeg";
  }
};
const Container = styled.div`
  background-color: white;
  border-radius: 30px;
  width: 300px;
  height: 340px;
  margin-bottom: 20px;
`;
const Image = styled.img`
  padding: 17px;
  width: 300px;
  height: 185px;
  border-radius: 30px;
  object-fit: cover;
`;
const Text = styled.p`
  padding: 17px;
  font-size: 20px;
`;

export default BeforeResultCard;
