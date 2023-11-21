import React, { useState, useRef } from "react";
import TodoForm from "./TodoForm";
import Todolist from "./Todolist";

const Todos = () => {
  const [data, setData] = useState([]);
  const no = useRef(1); // id값으로 활용

  // 추가 Add
  const onAdd = (text) => {
    setData([...data, { id: no.current++, text, isChk: false }]);
  };
  // 삭제 Delete
  const onDel = (id) => {
    setData(data.filter((list) => list.id !== id));
  };
  // 수정(완료) Update(취소선)
  const onMod = (id) => {
    setData(
      data.map((list) =>
        list.id === id ? { ...list, isChk: !list.isChk } : list
      )
    );
  };

  return (
    <div>
      <h2>to do list</h2>
      {/* 입력 받는 컴포넌트 */}
      <TodoForm onAdd={onAdd} />

      {/* 리스트 출력 컴포넌트 (1.출력, 2.삭제, 3.완료) */}
      <Todolist data={data} onDel={onDel} onMod={onMod} />
    </div>
  );
};

export default Todos;
