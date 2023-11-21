import React, { useRef, useState } from "react";

const UseEffect2 = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState("");

  const inputText = () => {
    setText("");
    focusRef.current.focus();
  };

  const focusRef = useRef();
  return (
    <div className="borderTop">
      <h2>useEffect2</h2>
      <input
        type="text"
        ref={focusRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={inputText}>클릭</button>
      <p>{text}</p>
    </div>
  );
};

export default UseEffect2;
