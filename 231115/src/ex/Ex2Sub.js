import React from "react";

const Ex2Sub = ({ name, price }) => {
  return (
    <>
      <h2>Ex2Sub 하위 컴포넌트</h2>
      <p>
        커피: {name}({typeof name}), 가격: {price}({typeof price})
      </p>
      <p></p>
    </>
  );
};

export default Ex2Sub;
