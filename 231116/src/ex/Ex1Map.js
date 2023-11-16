import React from "react";

const Ex1Map = () => {
  const colors = [
    { no: 1, bg: "tomato" },
    { no: 2, bg: "orange" },
    { no: 3, bg: "salmon" },
    { no: 4, bg: "forestgreen" },
  ];

  return (
    <div className="borderTop">
      <h2 className="margin-10">.map() 연습</h2>
      <ul style={{ margin: 10 }}>
        {colors.map((color) => {
          
          // 비구조할당
          const {no, bg} = color;

          return (
            <li
              className="margin-10"
              style={{ backgroundColor: bg, width: "20%" }}
              key={no}>
              {bg}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Ex1Map;
