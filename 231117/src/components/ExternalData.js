import React, { useState } from "react";
// 외부 스타일 문서 적용
import "../assets/style/ExternalStyle.css";
// 외부 coffeeList.js 문서 적용
import CoffeeList from "../assets/DB/CoffeeList";

const ExternalData = () => {
  const [coffee, setCoffee] = useState(CoffeeList);

  return (
    <section className="borderTop">
      <h2>외부 데이터 불러오기</h2>
      <table className="cafe">
        <caption>카페 메뉴</caption>
        <thead>
          <tr>
            <th>커피</th>
            <th>차</th>
            <th>음료</th>
            <th>기타</th>
          </tr>
          {coffee.map(({ id, coffee, tea, drink, other }) => (
            <tr key={id}>
              <td>{coffee}</td>
              <td>{tea}</td>
              <td>{drink}</td>
              <td>{other}</td>
            </tr>
          ))}
        </thead>
      </table>
    </section>
  );
};

export default ExternalData;
