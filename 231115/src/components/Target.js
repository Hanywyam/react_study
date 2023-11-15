import React from "react";

const Target = () => {
  const border = {
    border: "1px solid #000",
    display: "block",
    width: "50%",
    padding: 10,
    margin: 10,
  };

  const onCheck = (e) => {
    // 사용자가 실제 클릭한 대상
    console.log("target:", e.target);
    // 이벤트가 바인딩된 대상 (이벤트 함수가 있는 버튼)
    console.log("currentTarget:", e.currentTarget);

    console.log("------------");
  };

  return (
    <div className="borderTop">
      <h2>e.target, e.currentTarget</h2>
      <div onClick={onCheck} style={border}>
        <span style={border}>span</span>
        <strong style={border}>click</strong>
      </div>
    </div>
  );
};

export default Target;
