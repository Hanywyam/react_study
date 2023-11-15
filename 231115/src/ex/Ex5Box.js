import React from "react";

const Ex5Box = ({ width, height, backgroundColor, border, title }) => {
  const borderStyle = border || ["5px", "dotted", "#444"];
  const boxStyle = {
    width: width || 150,
    height: height || 200,
    backgroundColor: backgroundColor || "forestgreen",
    borderWidth: borderStyle[0],
    borderStyle: borderStyle[1],
    borderColor: borderStyle[2],
    margin: "10px auto",
  };
  return <div style={boxStyle}>{title}</div>;
};

/* 내가 쓴 code
const Ex5Box = ({ width, height, backgroundColor, border, title }) => {
  return (
    <div>
      <h3>컬러 상자 만들기</h3>
      <p
        style={{
          width: width,
          height: height,
          backgroundColor: backgroundColor,
        }}></p>
    </div>
  );
}; */

export default Ex5Box;
