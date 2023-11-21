import React, { useRef, useState } from "react";
import myStyled from "styled-components";

const Box = myStyled.div`
width: 200px; 
height:200px;
line-height: 200px;
background-color:orange;
margin: 50px;
transition: 0.5s;
text-align: center;
`;

const UseRef3 = () => {
  const boxRef = useRef(null);
  let [num, setNum] = useState(1);

  const leftRot = () => {
    setNum(++num);
    boxRef.current.style.transform = `rotate(${num * 15}deg)`;
  };
  const RightRot = () => {
    setNum(--num);
    boxRef.current.style.transform = `rotate(${num * -15}deg)`;
  };

  return (
    <div className="borderTop">
      <button onClick={RightRot}>오른쪽으로</button>
      <button onClick={leftRot}>왼쪽으로</button>

      <Box ref={boxRef}>box</Box>
    </div>
  );
};

export default UseRef3;
