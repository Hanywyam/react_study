import React from "react";
import Ex2Sub from "./Ex2Sub";

const Ex2 = () => {
  const latte = { name: "카페라떼", price: 4000 };

  return (
    <div className="borderTop">
      <h2>props 연습 2</h2>
      <Ex2Sub name="아메리카노" price="3000" />
      <Ex2Sub name={latte.name} price={latte.price} />
      <Ex2Sub {...latte} />
    </div>
  );
};

export default Ex2;

// 새로운 js 문서 작성
// 커피 : 카페라떼
// 가격 : 4000
