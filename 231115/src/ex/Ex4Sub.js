import React from "react";

const Ex4Sub = (props) => {
  const { name, type, size, price, color, bgcolor, done } = props;

  return (
    <div style={{ backgroundColor: bgcolor }}>
      <h3 style={{ color: color }}>{name}</h3>
      <ul>
        <li>종류: {type}</li>
        <li>사이즈: {size}</li>
        <li>가격: {price}</li>
        <li>글자색: {color}</li>
        <li>배경색: {bgcolor}</li>
        <li>확인: {done ? "접수" : "미접수"}</li>
      </ul>
    </div>
  );
};

// 초기 props 값 설정. 선택사항
// 자식 컴포넌트.defaultProps = {props명: 초기값}
Ex4Sub.defaultProps = {
  name: "오늘의커피",
  type: "HOT",
  size: "tall",
  price: "싯가",
  color: "#444",
  bgcolor: "#999",
  done: false,
};

export default Ex4Sub;
