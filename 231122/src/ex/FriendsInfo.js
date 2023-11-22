import React, { useState } from "react";
import styled from "styled-components";

const CatForm = styled.form`
  width: 300px;
  background-color: beige;
  padding: 20px;
  margin: 10px 0;
  box-sizing: border-box;
`;
const InfoBtn = styled.button`
  width: 100%;
  background-color: #000;
  color: #fff;
  border: #000 1px solid;
  margin: 2px;
  padding: 7px 10px;
  &:hover {
    background-color: #fff;
    border: #000 1px solid;
    color: #000;
  }
`;

const FriendsInfo = ({ onAdd }) => {
  const [newFriend, setNewFriend] = useState({ name: "", age: "", image: "" });
  const { name, age, image } = newFriend;

  const changeInput = (e) => {
    const { name, value } = e.target;

    setNewFriend({
      ...newFriend,
      [name]: value,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    onAdd(newFriend);
    setNewFriend({ name: "", age: "", image: "" });
  };

  return (
    <CatForm onSubmit={handleAdd}>
      <p>
        <label htmlFor="catName">
          이름
          <input
            type="text"
            id="catName"
            name="name"
            value={name}
            style={{ marginLeft: 30 }}
            onChange={changeInput}
          />
        </label>
      </p>
      <p>
        <label htmlFor="catAge">
          나이
          <input
            type="text"
            id="catAge"
            name="age"
            value={age}
            style={{ marginLeft: 30 }}
            onChange={changeInput}
          />
        </label>
      </p>
      <p>
        <label htmlFor="catPic">
          사진
          <input
            type="text"
            id="catPic"
            name="image"
            value={image}
            style={{ marginLeft: 30 }}
            onChange={changeInput}
          />
        </label>
      </p>
      <p>
        <InfoBtn type="submit">추가</InfoBtn>
      </p>
    </CatForm>
  );
};

export default FriendsInfo;
