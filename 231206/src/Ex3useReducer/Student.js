import React from "react";

const Student = ({ stu, dispatch }) => {
  const { id, name, isChk } = stu;

  const HandleDelStudent = () => {
    dispatch({ type: "DELETE", payload: { id } });
  };

  return (
    <li>
      {/* 스트롱 클릭 -> 취소선 */}
      <strong
        style={{ textDecoration: isChk && "line-through" }}
        onClick={() => dispatch({ type: "CHECK", payload: { id } })}>
        {name}
      </strong>
      <button onClick={HandleDelStudent}>삭제</button>
    </li>
  );
};

export default Student;
