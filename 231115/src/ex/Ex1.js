import React from "react";

const Coffee = ({ menu, price }) => {
  return (
    <>
      <ul>
        <li>
          주문한 커피는 {menu}이며, 가격은 {price}원 입니다.
        </li>
      </ul>
    </>
  );
};

const Ex1 = () => {
  return (
    <div className="borderTop">
      <h2>porps 연습 1</h2>
      <Coffee menu="아메리카노" price="4000" />
      <Coffee menu="카페라떼" price="4500" />
      <Coffee menu="바닐라라떼" price="5000" />
    </div>
  );
};

export default Ex1;
/* 
  출력값
  '주문한 커피는 {}이며, 가격은 {}원 입니다.'

  아메리카노
  카페라떼
  바닐라라떼
*/
