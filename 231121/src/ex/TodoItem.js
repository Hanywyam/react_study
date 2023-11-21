import React from "react";
import styled from "styled-components";

const List = styled.li`
  display: "flex";
  margin: "10px";
  justify-content: "space-between";
`;

const TodoItem = ({ list, onDel, onMod }) => {
  const { id, text, isChk } = list;
  return (
    <List
      // className={isChk ? "on" : ""}
      key={id}
      style={isChk ? { textDecoration: "line-through" } : {}}>
      <em onClick={() => onMod(id)}>{text}</em>
      <button onClick={() => onDel(id)}>삭제</button>
    </List>
  );
};

export default TodoItem;
