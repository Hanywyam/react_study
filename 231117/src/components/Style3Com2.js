import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: ${(props) => props.wt};
  padding: 30px 20px;
  margin: 10px auto;
  background-color: ${(props) => (props.bg ? props.bg : "navy")};
`;
const Title = styled("h2")`
  font-size: 3rem;
  color: #fff;
  margin: 20px;
`;
const Box = styled.button`
  text-align: center;
  background-color: ${(props) => props.bgcolor};
  color: #fff;
  border: none;
  margin: 10px;
  padding: 5px 10px;
  width: ${(props) => (props.width ? props.width : "100px")};

  /* 
  조건부 스타일링 
  ${(props) => props.primary && css``} 
  props.primary가 true일 때 적용 
  */

  ${(props) =>
    props.primary &&
    css`
      background-color: #000;
      width: 80%;
      display: block;
      &:hover {
        background-color: maroon;
      }
    `}
`;

const Style3Com2 = () => {
  return (
    <Wrapper wt="70vw" bg="#444">
      <Title>styled-components</Title>
      <Box width="120px" bgcolor="red">
        box1
      </Box>
      <Box width="120px" bgcolor="blue">
        box2
      </Box>
      <Box width="120px" bgcolor="forestgreen">
        box3
      </Box>
      <Box primary>box4</Box>
    </Wrapper>
  );
};

export default Style3Com2;
