import React, { useState } from "react";

const State5Form = () => {
  // 내용이 입력 될 때마다 상태를 감지할 수 있게
  const [txt, setTxt] = useState("");
  // 내용이 추가 될 때마다 상태를 감지할 수 있게
  const [data, setData] = useState([]);

  // 사용자가 입력하는 값을 받아 다시 사용할 수 있게 txt로 반환
  const itemList = (evt) => {
    // const val = evt.target.value;
    const { value } = evt.target;
    setTxt(value);
  };

  // 내용 추가 함수
  const addItems = () => {
    // 빈 내용이 입력되지 않게 알림창 띄우기
    if (txt === "") {
      alert("내용을 작성해 주세요");
      return;
    }

    setData((prevItem) => [...prevItem, { id: prevItem.length, text: txt }]);
    setTxt("");
  };

  return (
    <section className="borderTop">
      <h2>state</h2>
      {/* 텍스트 필드의 입력값 감지 == onChange 값
      onChange 텍스트 필드값이 변경 될 때마다 함수 itemList 실행 */}
      <input
        type="text"
        value={txt}
        onChange={itemList}
        placeholder="내용 추가"
      />
      <button onClick={addItems}>추가</button>
      <hr />
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </section>
  );
};

export default State5Form;
