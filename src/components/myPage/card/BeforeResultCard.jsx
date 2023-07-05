import React from "react";
import { styled } from "styled-components";

const BeforeResultCard = () => {
  return (
    <Container>
      <Image src="./imgs/art.jpeg" />
      <Text>{`취미 : ${"독서"}`}</Text>
      <Text>{`검사날짜 : ${"2023.07.04"}`}</Text>
    </Container>
  );
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
