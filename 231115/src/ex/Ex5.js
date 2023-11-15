import React from "react";
import Ex5Box from "./Ex5Box";

const Ex5 = () => {
  return (
    <div className="borderTop">
      <h2>스타일 속성(props) 넘기기</h2>
      <Ex5Box width={100} height="100px" backgroundColor="blue" title="box1" />
      <Ex5Box border={[6, "solid", "red"]}  title="box2" />
    </div>
  );
};

export default Ex5;
//div
//width, height, backgroundColor, ...
