import React from "react";
import styled from "styled-components";

const CatInfoWrap = styled.form`
  width: 100%;
  background-color: beige;
  padding: 20px;
  margin: 10px 0;
  box-sizing: border-box;
`;
const InfoBtn = styled.button`
  width: 100%;
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

const FriendsInfo = ({ data }) => {
  return (
    <CatInfoWrap>
      <p>
        <label htmlFor="catName">
          이름
          <input type="text" id="catName" style={{ marginLeft: 30 }} />
        </label>
      </p>
      <p>
        <label htmlFor="catAge">
          나이
          <input type="text" id="catAge" style={{ marginLeft: 30 }} />
        </label>
      </p>
      <p>
        <label htmlFor="catPic">
          사진
          <input type="text" id="catPic" style={{ marginLeft: 30 }} />
        </label>
      </p>
      <p>
        <InfoBtn>추가</InfoBtn>
      </p>
    </CatInfoWrap>
  );
};

export default FriendsInfo;
