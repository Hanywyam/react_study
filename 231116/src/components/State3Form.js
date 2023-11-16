import React, { useState } from "react";

const State3Form = () => {
  const [isCheck, setIsCheck] = useState(false);
  const onCheck = (evt) => {
    // 방법1)
    // setIsCheck(evt.target.checked);

    // 방법2) 비구조할당
    const { checked } = evt.target;
    setIsCheck(checked);
  };

  return (
    <div className="borderTop">
      <h2>오늘의 할 일</h2>
      <p
        style={{
          fontWeight: "bold",
          textDecoration: isCheck ? "line-through" : "none",
          color: isCheck ? "navy" : "red",
          backgroundColor: isCheck ? "#fff" : "#ddd",
        }}>
        <label>
          <input type="checkbox" onChange={onCheck} checked={isCheck} />
          우산 챙기기
        </label>
      </p>
    </div>
  );
};

export default State3Form;
