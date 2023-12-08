import React from "react";

const TodosInput = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="할 일을 입력하세요." />
      <button>확인</button>
    </form>
  );
};

export default TodosInput;
