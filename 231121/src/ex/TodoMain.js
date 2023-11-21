import React, { useRef, useState } from "react";
import TodoLists from "./TodoLists";
import styled from "styled-components";

const Container = styled.div`
  width: 70%;
  margin: 10px auto;
  padding: 20px 10px 40px;
  text-align: center;
  background-color: beige;
  border-radius: 15px;
`;
const Wrap = styled.div`
  padding: 10px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TxtBox = styled.input`
  width: 80%;
  height: 20px;
  list-style: none;
`;
const Button = styled.button`
  background-color: #222;
  color: #fff;
  height: 30px;
  padding: 0 10px;
  margin: 5px;
  border-radius: 5px;
  border: none;
`;
const Listbox = styled.ul`
  margin: 10px 0;
  padding: 0;
  text-align: left;
`;

// 입력 받는 컴포넌트
const TodoMain = () => {
  const [txt, setTxt] = useState("");
  const [data, setData] = useState([]);

  const txtItem = (e) => {
    const { value } = e.target;
    setTxt(value);
  };

  const idRef = useRef(1);
  const AddList = () => {
    if (txt === "") {
      alert("내용을 작성해 주세요");
      return;
    }

    setData((item) => [...item, { id: idRef.current++, text: txt }]);
    setTxt("");
  };

  const onDel = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <Container>
      <h2>📝오늘의 할 일</h2>
      <Wrap>
        <TxtBox type="text" value={txt} onChange={txtItem} />
        <Button onClick={AddList}>추가</Button>
      </Wrap>
      <Listbox>
        <TodoLists data={data} onDel={onDel} />
      </Listbox>
    </Container>
  );
};

export default TodoMain;
