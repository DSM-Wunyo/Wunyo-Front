import { styled } from "styled-components";
import { fetchHobbyRank } from "../../server/api/hobby";
import { useEffect, useState } from "react";

export default function Rank() {
  const [rankList, setRankList] = useState([]);

  useEffect(() => {
    fetchHobbyRank().then((response) => {
      setRankList(response?.data ?? []);
    });
  }, []);

  return (
    <Container>
      <RankListContainer>
        {rankList.map((res, index) => {
          return (
            <RankContainer>
              <Number>{`${index}.`}</Number>
              <RankImg src="/main/music.png" />
              <Wrapper>
                <Hobby>{res.hobby}</Hobby>
                <Percent>{`${res.ratio}%`}</Percent>
              </Wrapper>
            </RankContainer>
          );
        })}
      </RankListContainer>
    </Container>
  );
}

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
`;

const RankListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;

const Container = styled.div`
  background-color: #ff9128;
  width: 100%;
  height: 780px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
