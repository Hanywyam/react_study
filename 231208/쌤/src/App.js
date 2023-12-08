import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import ColorBox from "./components/ColorBox";
import ColorPrint from "./components/ColorPrint";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1>redux:여러개의 컨퍼넌트 상태값 공유</h1>
      <Counter />
      <ColorBox />
      <hr />
      <ColorPrint />
      <hr />
      <Todos />
    </>
  );
}

export default App;
