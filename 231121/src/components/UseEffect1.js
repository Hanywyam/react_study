import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

const UseEffect1 = () => {
  const [count, setCount] = useState(0);

  // DOM을 직접 건들여서 작업.
  const ref1 = useRef();
  const ref2 = useRef();

  const onBg = () => {
    setCount(count + 1);
    ref1.current.style.backgroundColor = "orange";
    ref2.current.style.backgroundColor = "tomato";
  };

  /*  화면에 렌더링 될 때마다 실행. 화면에 그려진 후
  useEffect(() => {
    console.log("useEffect에요");
    ref1.current.style.backgroundColor = "lightblue";
    ref2.current.style.backgroundColor = "salmon";
  });
 */

  // 화면에 그려지기 전에 적용
  useLayoutEffect(() => {
    console.log("useLayoutEffect에요");
    ref1.current.style.backgroundColor = "#f95";
    ref2.current.style.backgroundColor = "#489";
  });

  return (
    <div>
      <h2>UseEffect1</h2>
      <h3>count : {count}</h3>
      <p ref={ref1}>useEffect</p>
      <p ref={ref2}>useLayoutEffect</p>
      <button onClick={onBg}>카운트</button>
    </div>
  );
};

export default UseEffect1;

/* 
useEffect(함수, []);
  주로 side effect 를 수행.
  비동기 통신 요청 및 응답, DOM 조작, props를 받아서 갱신할 때, 외부 라이브러리 등을 사용할 때 적용.

  Mount: 생성. 시작시
  Update: 갱신. state 값 변경 시
  unMount: 소멸. 종료 시
이 세개를 합친 것이 useEffect

  useEffect(()=>{실행문}); 렌더링 될 때마다 실행. 일반적으로는 사용 X
  useEffect(()=>{실행문}); mount가 한 번만 실행.
  useEffect(()=>{실행문}); 특정 상태이거나 props가 변결 될 때 마다 실행.

  useEffect(()=> {
    실행문
    return ()=> {clean-up 함수}
  },[state]);
  Mount가 한 번만 실행 후 정리. 메모리 누수가 발생하지 않도록 정리가 필요하기 때문.
*/
