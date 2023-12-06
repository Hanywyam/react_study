import React from "react";
import Colors from "./components/Color/Colors";
import Todos from "./components/todos/Todos";
import TodoProvider from "./Context/TodoContext";
import ColorProvider from "./Context/ColorContext";

const Ex1Context = () => {
  return (
    <div>
      <h2>Ex1context2</h2>
      <TodoProvider>
        <ColorProvider>
          <Colors />
        </ColorProvider>
        <Todos />
      </TodoProvider>
    </div>
  );
};

export default Ex1Context;
