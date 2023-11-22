import React, { useState, useEffect, useCallback } from "react";

const Ex1useEffectSub = () => {
  const [now, setNow] = useState(new Date());

  const updateTime = useCallback(() => {
    setNow(new Date());
  }, []);

  useEffect(() => {
    console.log("시작");
    const timer = setInterval(updateTime, 1000);

    // 자식 컴포넌트를 사용하는 경우, setInterval()의 경우 clean-up 함수 필요.
    return () => {
      console.log("클린업");
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      style={{
        color: "#222",
        backgroundColor: "#ddd",
        width: "50vw",
        padding: 20,
        margin: 10,
        fontWeight: "bold",
      }}>
      <p>날짜: {now.toLocaleDateString()} </p>
      <p>시간: {now.toLocaleTimeString()} </p>
    </div>
  );
};

export default Ex1useEffectSub;
