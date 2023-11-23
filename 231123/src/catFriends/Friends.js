import React, { useCallback, useRef, useState } from "react";
import FriendsList from "./FriendsList";
import FriendsBtn from "./FriendsBtn";
import FriendsInput from "./FriendsInput";
import catData from "../assets/DB/catData";

const Friends = () => {
  // const [변수, 함수] = useState();
  const [data, setData] = useState(catData);
  const [ischk, setIschk] = useState(false);
  const no = useRef(catData.length + 1); //  id 값으로 사용.

  // 체크박스
  const changeInput = useCallback((e) => {
    const { checked } = e.target;
    setIschk(checked);
  }, []);

  // 추가
  const onAdd = useCallback(
    (form) => {
      form.id = no.current++;
      setData([...data, form]);
    },
    [data] // 데이터 값이 변하면 실행(추가)해라.
  );

  // 삭제
  const onDelete = useCallback(
    (id) => {
      setData(data.filter((item) => item.id !== id));
    },
    [data] // 데이터 값이 변하면 실행(삭제)해라.
  );

  // 모두 삭제
  const onRemove = useCallback(() => {
    setData([]); // 빈 배열을 반환하면 모두 삭제
  }, []);

  // 모두 복구
  const onReset = useCallback(() => {
    setData(catData); // 초기 리스트 배열을 반환하면 모두 복구
  }, []);

  return (
    <div>
      <h2>고양이 친구들 : {data.length}마리</h2>

      <FriendsBtn onRemove={onRemove} onReset={onReset} />
      <FriendsList data={data} onDelete={onDelete} />

      <label htmlFor="chk">
        <input
          type="checkbox"
          id="chk"
          checked={ischk}
          onChange={changeInput}
        />
        고양이 추가
      </label>
      {ischk && <FriendsInput onAdd={onAdd} />}
    </div>
  );
};

export default Friends;
