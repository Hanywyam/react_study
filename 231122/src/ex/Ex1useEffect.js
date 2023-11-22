import React, { useState } from "react";
import Ex1useEffectSub from "./Ex1useEffectSub";

const Ex1useEffect = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div className="borderTop">
      <button onClick={handleToggle}>{isToggle ? "숨김" : "보임"}</button>
      {/* 하위 컴포넌트를 만들고 현재 날짜, 시간이 1초마다 업데이트 */}
      {isToggle && <Ex1useEffectSub />}
    </div>
  );
};

export default Ex1useEffect;
