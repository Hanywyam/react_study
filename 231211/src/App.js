import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Count from "./components/Count";
import ColorBox from "./components/ColorBox";
import ColorPrint from "./components/ColorPrint";

function App() {
  return (
    <>
      <h1>redux Toolkit</h1>
      {/* <Counter /> */}
      <Count />
      <ColorBox />
      <hr />
      <ColorPrint />
    </>
  );
}

export default App;
