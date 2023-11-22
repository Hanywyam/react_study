import React, { useState } from "react";
import styled from "styled-components";
import FriendItem from "./FriendItem";
import FriendLiBtn from "./FriendLiBtn";

const FriendUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: column;
  box-sizing: border-box;
`;

const FriendLists = ({ data, DelAll, Restore, onDel }) => {
  return (
    <>
      <FriendLiBtn DelAll={DelAll} Restore={Restore} />
      <FriendUl>
        {data.map((item) => (
          <FriendItem key={item.id} item={item} onDel={onDel} />
        ))}
      </FriendUl>
    </>
  );
};

export default FriendLists;
