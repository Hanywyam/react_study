import React, { useState } from "react";
import styled from "styled-components";

const List = styled.li`
  /* background-color: #ddd; */
  border-bottom: 1px solid burlywood;
  margin: 5px 0;
  padding: 10px 20px;
  list-style: none;
  font-weight: bold;
  /* border-radius: 10px; */
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  background-color: inherit;
  border: none;
`;

// 출력 컴포넌트 (1.출력, 2.삭제, 3.완료)
const TodoLists = ({ data, onDel }) => {
  const [chkList, setChkList] = useState(Array(data.length).fill(false));

  const onCheck = (index) => {
    setChkList((prev) => prev.map((itm, idx) => (idx === index ? !itm : itm)));
  };

  const DelList = (id) => {
    onDel(id);
  };

  return (
    <>
      {data.map((itm, index) => (
        <List
          key={itm.id}
          style={{
            textDecoration: chkList[index] ? "line-through" : "none",
            color: chkList[index] ? "#888" : "maroon",
          }}>
          <input
            type="checkbox"
            onChange={() => onCheck(index)}
            checked={chkList[index]}
          />
          {itm.text}
          <Button onClick={() => DelList(itm.id)}>🗑️</Button>
        </List>
      ))}
    </>
  );
};

export default TodoLists;
