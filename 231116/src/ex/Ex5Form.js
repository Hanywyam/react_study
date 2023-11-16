import React, { useState } from "react";

const Ex5Form = () => {
  const [isCheck, setIsCheck] = useState(false);
  const onCheck = (evt) => {
    const { checked } = evt.target;
    setIsCheck(checked);
  };

  return (
    <section className="borderTop">
      <h2>Ex5 - form</h2>
      <p>
        {/* 체크 박스를 체크하면 "보임", 해제하면 "숨김" */}
        <label>
          <input type="checkbox" onChange={onCheck} checked={isCheck} />
          {isCheck ? "보임" : "숨김"}
        </label>
      </p>
      {/* 위의 체크박스 체크하면 div보임. 해제하면 안보임 */}
      {isCheck && (
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: "orange",
            margin: 10,
          }}></div>
      )}
      <div
        style={{
          width: isCheck ? "300px" : null,
          height: isCheck ? "100px" : null,
          backgroundColor: "teal",
          textAlign: "center",
          lineHeight: "100px",
          fontWeight: "bold",
          fontSize: "2rem",
          color: "#fff",
          margin: 10,
        }}>
        {isCheck ? "Box" : null}
      </div>
    </section>
  );
};

export default Ex5Form;
