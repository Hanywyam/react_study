import React, { useState, useRef } from "react";

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");
  const focusRef = useRef();

  const changeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const onSubmit = (e) => {
    // submit를 누르면 새로고침(기본값)되서 그거 방지(초기화).
    e.preventDefault();
    if (!text) {
      alert("리스트를 작성해 주세요.");
      return;
    }
    // li 추가 함수
    onAdd(text);
    // 버튼을 누르고 데이터 삭제
    setText("");
    // 이후 커서 포커싱
    focusRef.current.focus();
  };

  // Enter키로 "추가" 버튼 누르기
  const handleKeyPress = (e) => {
    if (e.key === "Enter") onSubmit(e);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        onChange={changeInput}
        ref={focusRef}
        onKeyPress={handleKeyPress}
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
