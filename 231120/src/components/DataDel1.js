import React, { useState } from "react";

const dataList = [
  { id: 1, name: "아메리카노" },
  { id: 2, name: "카페라떼" },
  { id: 3, name: "바닐라라떼" },
  { id: 4, name: "카페모카" },
  { id: 5, name: "에스프레소" },
];

const DataDel1 = () => {
  const [data, setData] = useState(dataList);

  // 객체 삭제 Dele =====================
  const onDel1 = () => {
    setData(data.filter((item) => item.name !== "카페모카"));
  };

  const onDel2 = () => {
    setData(data.filter((item) => item.id !== 3));
  };

  const onDel3 = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  // 객체 추가 Create =====================
  const onAdd1 = () => {
    setData([...data, { id: 6, name: "비엔나 커피" }]);
  };

  // 방법 1)
  // const onAdd2 = (item) => {
  //   setData([...data, { id: data.length + 1, name: item }]);
  // };

  // 방법 2)
  // 편의상 매개변수(name)에 키값과 동일한 이름 부여.
  // 키와 값이 같은 경우, 같은 이름으로 작성이 가능.
  const onAdd2 = (name) => {
    setData([...data, { id: data.length + 1, name }]);
  };

  // 객체 수정 Update? =====================
  const onMod1 = () => {
    setData(
      //카페모카 탐색 -> 아이스 카페모카로 수정: 조건식
      data.map((item) => {
        if (item.id === 4) {
          return {
            ...item,
            name: "아이스 카페모카",
          };
        } else {
          return item;
        }
      })
    );
  };

  const onMod2 = () => {
    setData(
      data.map((item) =>
        item.id === 5 ? { ...item, name: "더블 에스프레소" } : item
      )
    );
  };

  const onMod3 = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, name: "아이스 아메리카노" } : item
      )
    );
  };

  return (
    <div className="borderTop">
      <h2>데이터 삭제1</h2>
      <ul>
        {data.map((itm) => (
          <li key={itm.id}>
            {itm.id} : {itm.name}
          </li>
        ))}
      </ul>
      <p>
        {/* 객체 삭제 Dele ===================== */}
        <button onClick={onDel1}>카페모카 삭제</button>
        <button onClick={onDel2}>3번 삭제</button>
        <button onClick={() => onDel3(1)}>1번 삭제</button>
        <button onClick={() => onDel3(5)}>5번 삭제</button>
        <button onClick={() => onDel3(2)}>2번 삭제</button>
      </p>
      <p>
        {/* 객체 추가 Create ===================== */}
        <button onClick={onAdd1}>비엔나 커피 추가</button>
        <button onClick={() => onAdd2("디카페인 커피")}>
          디카페인 커피 추가
        </button>
        <button onClick={() => onAdd2("헤이즐넛 커피")}>
          헤이즐넛 커피 추가
        </button>
      </p>
      <p>
        {/* 객체 수정 Update? ===================== */}
        <button onClick={onMod1}>카페모카 수정</button>
        <button onClick={onMod2}>에스프레소 수정</button>
        <button onClick={() => onMod3(1)}>아메리카노 수정</button>
      </p>
    </div>
  );
};

export default DataDel1;
