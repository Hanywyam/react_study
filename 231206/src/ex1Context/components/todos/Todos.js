import React from "react";
import TodosInput from "./TodosInput";
import TodoList from "./TodoList";

const Todos = () => {
  return (
    <div>
      <h3 style={{ color: "#222" }}>To do list</h3>
      <TodosInput />
      <TodoList />
    </div>
  );
};

export default Todos;
