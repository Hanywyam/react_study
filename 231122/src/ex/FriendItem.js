import React from "react";
import styled from "styled-components";

const List = styled.li`
  display: flex;
  align-items: center;
  background-color: #ddd;
  width: 90%;
  padding: 20px;
  margin: 10px 0;
`;
const Img = styled.img`
  width: 150px;
  border-radius: 50%;
`;
const TextInfo = styled.div`
  margin-left: 20px;
`;
const Btn = styled.button`
  background-color: #888;
  color: #222;
  border: #222 1px solid;
  border-radius: 7px;
  padding: 5px 8px;
  &:hover {
    background-color: #fff;
    border: #000 1px solid;
    color: #000;
  }
`;

const FriendItem = ({ item, onDel }) => {
  const { id, name, age, image } = item;

  return (
    <List key={id}>
      <p>
        <Img src={image} alt={name} />
      </p>
      <TextInfo>
        <p>
          <strong>이름: {name} </strong>
        </p>
        <p>나이: {age} </p>
        <Btn onClick={() => onDel(id)}>삭제할고양</Btn>
      </TextInfo>
    </List>
  );
};

export default FriendItem;
