import { styled } from "styled-components";

export default function Rank() {
  return (
    <Container>
      <Box>
        <Box1></Box1>
        <Box2></Box2>
        <Box3></Box3>
      </Box>
    </Container>
  );
}

const Box3 = styled.div`
  width: 1400px;
  height: 100px;
  background-color: white;
  border-radius: 20px;
`;

const Box2 = styled.div`
  width: 1400px;
  height: 100px;
  background-color: white;
  border-radius: 20px;
`;

const Box1 = styled.div`
  width: 1400px;
  height: 100px;
  background-color: white;
  border-radius: 20px;
`;

const Box = styled.div`
  gap: 20px;
`;

const Container = styled.div`
  background-color: #ff9128;
  width: 100%;
  height: 690px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
