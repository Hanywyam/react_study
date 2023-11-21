import React from "react";
import TodoItem from "./TodoItem";

const Todolist = ({ data, onDel, onMod }) => {
  return (
    <div>
      <ul
        style={{
          borderTop: "1px solid #000",
          width: "60%",
          margin: "10px 0",
          padding: 0,
        }}>
        {data.map((list) => (
          <TodoItem list={list} onDel={onDel} onMod={onMod} />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
