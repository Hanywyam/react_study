import React from "react";
import styled from "styled-components";

const P = styled.p`
  margin: 0 auto;
`;
const Btn = styled.button`
  background-color: #000;
  color: #fff;
  border: #000 1px solid;
  margin: 2px;
  padding: 7px 10px;
  &:hover {
    background-color: #fff;
    border: #000 1px solid;
    color: #000;
  }
`;

const FriendLiBtn = ({ DelAll, Restore }) => {
  return (
    <>
      <P>
        <Btn onClick={DelAll}>모두 삭제</Btn>
        <Btn onClick={Restore}>초기 복구</Btn>
      </P>
    </>
  );
};

export default FriendLiBtn;
