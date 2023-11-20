import React, { useState } from "react";

const Ex1 = () => {
  // 음료 추가 버튼 클릭 시, 음료$ 랜덤 출력
  // 삭제 버튼 클릭 시, 아이디 3번 음료 삭제
  const [data, setData] = useState([]);

  const onAdd = () => {
    const random = Math.floor(Math.random() * 10 + 1);
    setData([...data, { id: data.length, text: "음료" + random }]);
  };

  const onDel = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="borderTop">
      <p>랜덤음료 출력: 음료 1~9</p>
      <button onClick={onAdd}>음료 추가</button>
      <button onClick={() => onDel(3)}>음료3번 삭제</button>

      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ex1;
