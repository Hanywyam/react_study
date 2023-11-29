import { useState } from "react";
import { useParams } from "react-router-dom";

const Products = ({ data }) => {
  const { name } = useParams();
  // const {사용자정의 라우트 변수} = useParams();
  // 이거하나면 data를 이용해 100개의 페이지도 만들 수 있음...

  return (
    <div>
      <h2>Products</h2>
      <h3>{name}값 받기</h3>
      <hr />

      {data
        .filter((itm) => itm.title === name)
        .map((itm) => (
          <div key={itm.id}>
            <h3>{itm.title}</h3>
            <p>{itm.info}</p>
          </div>
        ))}
    </div>
  );
};

export default Products;
