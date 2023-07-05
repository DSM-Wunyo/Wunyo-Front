import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { fetchResultDetail } from "../../server/api/result";

const Result = () => {
  const [result, setResult] = useState({
    resultID: 6,
    hobby: "독서",
    content: "책을 읽어 마음의 소양을 기릅니다",
    img: "",
  });
  const [url, setUrl] = useState("");

  const result_id = Number(localStorage.getItem("result_id"));

  useEffect(() => {
    console.log(1);
    fetchResultDetail({ resultId: result_id }).then((res) => {
      const response = res?.data;
      const result = {
        resultId: response.hobby_id,
        hobby: response.recommend_hobby,
        content: response.content,
        img: getImage(response.hobby_id),
      };
      setResult(result);
    });
  }, [result_id]);

  const getImage = (id) => {
    switch (id) {
      case 1:
      case 5:
      case 9:
        setUrl("https://www.korswim.co.kr/");
        return "/imgs/swim.png";
      case 2:
        setUrl(" https://koreaskateboard.or.kr/");
        return "/imgs/skateBoard.jpg";
      case 3:
        setUrl(" https://cycling.or.kr/");
        return "/imgs/bike.png";
      case 4:
        setUrl("http://www.walk4all.or.kr/index.html");
        return "/imgs/jogging.jpg";
      case 6:
        setUrl("http://www.koreayoga.net/");
        return "/imgs/yoga.png";
      case 7:
        setUrl("https://kaf.or.kr/");
        return "/imgs/mountain.jpg";
      case 8:
        setUrl("http://www.walk4all.or.kr/index.html");
        return "/imgs/walking.jpg";
      case 11:
        setUrl(" http://www.koreapuzzle.org/");
        return "/imgs/puzzle.jpg";
      case 12:
        setUrl("https://kfaa.or.kr/");
        return "/imgs/drawing.avif";
      case 13:
        setUrl("https://www.kofic.or.kr/kofic/business/main/main.do");
        return "/imgs/watchMovie.jpg";
      case 14:
        setUrl("https://ncdesign.co.kr/embroidery");
        return "/imgs/jasu.jpg";
      case 15:
        setUrl("http://www.koreahca.or.kr/default/");
        return "/imgs/gongYe.jpg";
      case 18:
        setUrl("https://www.mak.or.kr:444/html/main/index.asp");
        return "/imgs/listenMusic.png";
      case 19:
        setUrl(" https://www.kfa.or.kr/");
        return "/imgs/soccer.png";
      case 20:
        setUrl("https://allstar.koreabaseball.com/");
        return "/imgs/baseball.png";
      case 21:
        setUrl("https://www.kva.or.kr/");
        return "/imgs/volleyball.png";
      case 22:
        setUrl(
          "https://jokgu.or.kr/index.do;jsessionid=872D1153F5E82FC82E06B29BFE969101.node1"
        );
        return "/imgs/football.png";
      case 23:
        setUrl("http://www.koreatta.or.kr/index.do");
        return "/imgs/tableTennis.png";
      case 26:
        setUrl(" http://www.kbfsports.or.kr/");
        return "/imgs/danggu.png";
      case 27:
        setUrl("http://www.amarun.com/html/main/main.asp");
        return "/imgs/maraton.png";
      case 28:
        setUrl("https://www.boardgame.or.kr/");
        return "/imgs/boardgame.png";
      case 29:
        setUrl("https://kmusical.kr/");
        return "/imgs/watchMusical.png";
      case 30:
      case 33:
        setUrl("https://department.ssg.com/");
        return "/imgs/shopping.png";
      case 31:
        setUrl("https://blog.naver.com/killer2414/222990768976");
        return "/imgs/hwatu.png";
      case 32:
        setUrl("http://www.prosports.or.kr/");
        return "/imgs/watchSprots.png";
      case 34:
        setUrl("https://www.kbaduk.or.kr/");
        return "/imgs/baduk.png";
      case 36:
        setUrl("http://www.kja.or.kr/");
        return "/imgs/janggi.png";
      default:
        setUrl("https://kfaa.or.kr/");
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
        <HobbyButton href={url} target="blank">
          취미 알아보기
        </HobbyButton>
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
const HobbyButton = styled.a`
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
