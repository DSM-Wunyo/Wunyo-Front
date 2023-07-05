import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import BeforeResultCard from "./card/BeforeResultCard";
import { fetchResultList } from "../../server/api/result";

const MyPage = () => {
  const [resultList, setResultList] = useState([]);

  useEffect(() => {
    const name = localStorage.getItem("name") ?? "";
    const sex = localStorage.getItem("sex") ?? "";
    const birthday = localStorage.getItem("birthday") ?? "";
    fetchResultList(name, sex, birthday).then((res) => {
      setResultList(res.data.result_list);
    });
  }, []);

  return (
    <Container>
      <BeforeResultText>이전 결과</BeforeResultText>
      <CardContainer>
        {resultList.map((result) => {
          return (
            <BeforeResultCard
              hobby={result.hobby}
              hobby_id={result.hobby_id}
              result_date={result.result_date}
              result_id={result.result_id}
            />
          );
        })}
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 20px;
`;

export default MyPage;
