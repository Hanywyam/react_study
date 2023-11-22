import React, { useState, useEffect } from "react";

const UseEffect4 = () => {
  const [count, setCount] = useState(1);

  // 화면에 렌더링 된 후 한 번만 실행
  // 의존성배열(상태값)
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("증가");
      setCount((num) => num + 1);
    }, 1000);

    // setInterval 제거 후 재렌더링. 컴퓨터 메모리 성능 향상.
    return () => {
      console.log("클린업");
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="borderTop">
      <h2>useEffect4</h2>
      <h3>count : {count}</h3>
      <p>1초마다 증가</p>
    </div>
  );
};

export default UseEffect4;
