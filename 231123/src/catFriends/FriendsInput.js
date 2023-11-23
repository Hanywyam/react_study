import React, { useRef, useState } from "react";

const FriendsInput = ({ onAdd }) => {
  const [form, setForm] = useState({ name: "", age: "", image: "" });
  const { name, age, image } = form;
  const focusRef = useRef();

  const chageInput = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    // 리액트에서 데이터 전송 -> 새로고침(첫화면) 초기값으로 설정됨.
    e.preventDefault(); //초기값 초기화

    // if (name === "" || age === "" || image === "") {
    if (!name || !age || !image) {
      alert("내용을 입력하세요.");
      return;
    }

    onAdd(form);
    setForm({ name: "", age: "", image: "" });
    focusRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 고양이 입력 폼 */}
      <p>
        <label htmlFor="catName">이름: </label>
        <input
          type="text"
          id="catName"
          value={name}
          name="name"
          onChange={chageInput}
          ref={focusRef}
        />
      </p>
      <p>
        <label htmlFor="catAge">나이: </label>
        <input
          type="text"
          id="catAge"
          value={age}
          name="age"
          onChange={chageInput}
        />
      </p>
      <p>
        <label htmlFor="catPic">사진(url): </label>
        <input
          type="text"
          id="catPic"
          value={image}
          name="image"
          onChange={chageInput}
        />
      </p>
      <button type="submit">추가</button>
    </form>
  );
};

export default FriendsInput;
