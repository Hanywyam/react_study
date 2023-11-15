import React from "react";

const Basic4 = () => {
  const styleTitle = {
    width: 100,
    fontSize: 36,
    fontWeight: "bold",
    backgroundColor: "tomato",
    color: "red",
  };
  const styleUl = {
    listStyle: "none",
    margin: 0,
    padding: 0,
  };
  const styleLi = {
    fontWeight: "bold",
    color: "#444",
    margin: 5,
  };

  const title = "menu";
  const coffee = "카페라떼";
  const size = "tall";
  const price = 4000;
  
  return (
    <section style={{ borderTop: "1px solid #000" }}>
      <h2 style={styleTitle}>{title}</h2>
      <ul style={styleUl}>
        <li style={styleLi}>주문 커피: {coffee}</li>
        <li style={styleLi}>가격: {price}</li>
        <li style={styleLi}>사이즈: {size}</li>
      </ul>
    </section>
  );
};

export default Basic4;
