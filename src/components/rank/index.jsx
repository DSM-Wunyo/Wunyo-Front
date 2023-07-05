import { styled } from "styled-components";
import { fetchHobbyRank } from "../../server/api/hobby";
import { useEffect, useState } from "react";

export default function Rank() {
  const [rankList, setRankList] = useState([]);

  useEffect(() => {
    fetchHobbyRank().then((response) => {
      setRankList(response?.data.ranking_list);
    });
  }, []);

  return (
    <Container>
      <RankListContainer>
        {rankList.map((res, index) => {
          return (
            <RankContainer>
              <Number>{`${index + 1}.`}</Number>
              <RankImg src={getImage(res.hobby_id)} />
              <Wrapper>
                <Hobby>{res.hobby}</Hobby>
                <Percent>{`${res.ratio.toFixed(2)}%`}</Percent>
              </Wrapper>
            </RankContainer>
          );
        })}
      </RankListContainer>
    </Container>
  );
}

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
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Percent = styled.p`
  margin: 0;
  margin-top: 10px;
  margin-left: 30px;
  font-size: 25px;
`;

const Hobby = styled.p`
  margin: 0;
  margin-left: 30px;
  font-size: 25px;
`;

const RankImg = styled.img`
  width: 130px;
  height: 130px;
  margin-left: 30px;
  border-radius: 20px;
`;

const Number = styled.p`
  font-size: 60px;
  margin-left: 10px;
`;

const RankContainer = styled.div`
  width: 1400px;
  height: 150px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0px 20px 0px;
  padding: 10px;
`;

const RankListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  background-color: #ff9128;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
