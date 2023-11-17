import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  height: 50vh;
  background-color: orange;
  width: 100%;
  display: grid;
  place-items: center;
`;

const mov = keyframes`
0%,100% {transform:translateY(0)}
25%{transform: translateY(-20px) rotate(20deg)}
50%{transform: translateY(10px)}
75%{transform: translateY(-20px) rotate(-20deg)}
`;

const Cat = styled.div`
  font-size: 5rem;
  animation: ${mov} 0.5s infinite ease-in-out;
`;

const Style4Com3 = () => {
  return (
    <Container>
      <Cat> 😺 </Cat>
    </Container>
  );
};

export default Style4Com3;
