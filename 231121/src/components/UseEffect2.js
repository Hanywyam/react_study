import React, { useEffect, useRef, useState } from "react";

const UseEffect2 = () => {
  const [text, setText] = useState("");
  const focusRef = useRef();

  // const inputText = () => {
  // setText("");
  // focusRef.current.focus();
  // };

  useEffect(() => {
    console.log("실행");
    focusRef.current.focus();
  }, []); // 딱 한번만 실행(hook)

  return (
    <div className="borderTop">
      <h2>useEffect2</h2>
      <input
        type="text"
        ref={focusRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {/* <button onClick={inputText}>클릭</button> */}
      <p>{text}</p>
    </div>
  );
};

export default UseEffect2;
