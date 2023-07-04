import { styled } from "styled-components";
import Header from "../header";

export default function Main() {
  return (
    <Container>
      <Header />
      <h1>my name is wunyo</h1>
    </Container>
  );
}

const Container = styled.div`
  background-color: red;
`;
