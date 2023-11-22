import React, { useState, useEffect } from "react";

const Ex2useEffect = () => {
  const [count, setCount] = useState(0);
  const [isToggle, setIstoggle] = useState(false);

  // 1초마다 카운트
  const timer = () => {
    setCount((num) => num + 1);
  };

  useEffect(() => {
    let countOn = null;
    // 버튼을 누를 때 시작
    if (isToggle) {
      countOn = setInterval(timer, 1000);
    } else {
      // 한번 더 누르면 멈춤
      clearInterval(countOn);
    }

    return () => {
      clearInterval(countOn);
    };
  }, [isToggle]);

  // 누르면 멈춤 : 시작
  const handleToggle = () => {
    setIstoggle(!isToggle);
  };

  // 누르면 정지 및 초기화
  const onReset = () => {
    setCount(0);
    setIstoggle(false);
    clearInterval(timer);
  };

  return (
    <div className="borderTop">
      <h2>1초마다 카운트</h2>
      <h2>count : {count}</h2>
      <button onClick={handleToggle}>{isToggle ? "멈춤" : "시작"}</button>
      <button onClick={onReset}>정지 및 초기화</button>
    </div>
  );
};

export default Ex2useEffect;
