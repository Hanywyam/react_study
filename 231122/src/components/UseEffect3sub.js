import React, { useState, useEffect, useCallback } from "react";

const UseEffect3sub = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // const onMove = (e) => {
  //   setX(e.clientX);
  //   setY(e.clientY);
  // };

  const onMove = useCallback(
    (e) => {
      setX(e.clientX);
      setY(e.clientY);
    },
    [setX, setY]
  );

  useEffect(() => {
    console.log("실행");
    // 리액트에서는 window 다 써줘야 함.
    window.addEventListener("mousemove", onMove);

    // clean-up 함수: 살아있는 이벤트를 제거.
    return () => {
      console.log("클린 업");
      window.removeEventListener("mousemove", onMove);
    };
  }, [onMove]);

  return (
    <div>
      {/* 실제DOM이 있어야 마우스 좌표값 환산가능 */}
      <h3>마우스 좌표</h3>
      <div style={{ border: "1px solid #000", width: "50vw", padding: 20 }}>
        x축 : {x} / y축 : {y}
      </div>
    </div>
  );
};

export default UseEffect3sub;
