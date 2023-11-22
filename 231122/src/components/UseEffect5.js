import React, { useState, useEffect } from "react";

const UseEffect5 = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(0);

  const onNum = (e) => {
    const { value } = e.target;
    // setText(value); 
    //input의 반환값은 문자열로 숫자로 변환해야 함.
    
    // setText(Number(value));
    // setText(parseInt(value));
    setText(+value);
  };

  const increment = () => {
    setCount((num) => num + text);
  };

  useEffect(() => {
    console.log("useEffect 실행");
    const timer = setInterval(increment, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [text]);

  return (
    <div className="borderTop">
      <h2>입력한 값만큼 2초마다 값 증가</h2>
      <p>
        숫자 간격: <input type="text" value={text} onChange={onNum} />
      </p>
      <h3>{count}</h3>
    </div>
  );
};

export default UseEffect5;
