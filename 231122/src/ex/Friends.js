import React, { useEffect, useRef, useState } from "react";
import FriendLists from "./FriendLists";
import FriendsInfo from "./FriendsInfo";
import catData from "../assets/DB/catData";
import styled from "styled-components";

const Container = styled.section`
  width: 50vw;
  margin: 10px 0;
  padding: 60px 30px 30px;
  border: 1px solid #000;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
const Title = styled.h2`
  align-self: flex-start;
`;

const ChkLabel = styled.label`
  background-color: #000;
  color: #fff;
  padding: 5px 10px;
  border-radius: 10px;
  position: absolute;
  top: 30px;
  right: 20px;
`;

const Friends = () => {
  const [data, setData] = useState(catData);
  const [isToggle, setIsToggle] = useState(false);
  const [count, setCount] = useState(catData.length);

  const DelAll = () => {
    setCount(0);
    setData([]);
  };

  const Restore = () => {
    setCount(catData.length);
    setData(catData);
  };

  const onDel = (id) => {
    setCount(count - 1);
    setData(data.filter((list) => list.id !== id));
  };

  const newId = useRef(1);

  const onAdd = (newFriend) => {
    setData([...data, { id: newId.current++, ...newFriend }]);
    setCount(count + 1);
  };

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <Container>
      <Title>고양이 친구들 : {count}마리</Title>
      <ChkLabel htmlFor="chk">
        <input type="checkbox" id="chk" onClick={handleToggle} />
        {isToggle ? "고양이 추가" : "추가 비활성"}
      </ChkLabel>

      {/* FriendLists: list + button */}
      <FriendLists
        data={data}
        DelAll={DelAll}
        Restore={Restore}
        onDel={onDel}
      />

      {/* FriendsInfo: form */}
      {isToggle && <FriendsInfo data={data} onAdd={onAdd} />}
    </Container>
  );
};

export default Friends;
