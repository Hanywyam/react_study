import React from "react";

const Event1 = () => {
  function handleClick1() {
    console.log("클릭1");
  }

  const handleClick2 = () => console.log("클릭2");

  const num = (item) => console.log(item + item);

  return (
    <div className="borderTop">
      <h2>Event1</h2>
      <h3>
        <em>예전 버전의 자바스크립트</em>
      </h3>
      <h3>'on-'접두어 + 첫글자 대문자인 이벤트명</h3>

      <p>
        {/* js: 'onclick', 'onsubmit' */}
        {/* JSX: 'onClick', 'onSubmit' */}
        {/* <button onClick={함수명}>클릭</button> */}
        <button onClick={function () {}}>복잡</button>
        <button onClick={handleClick1}>클릭</button>
        <button onClick={handleClick2}>눌러보자</button>
      </p>

      <p>
        <button
          onClick={() => {
            console.log("직접 작성");
          }}>
          직접 작성
        </button>
      </p>

      <p>
        {/* 함수를 만들고 매개변수로 100 입력 시, 100+100 = 200 콘솔 출력 */}
        {/* 
          <button onClick={num(100)}>숫자 출력</button> 
          {num(100)} == 함수 즉시 호출. 처음부터 실행.
          
          {()=>함수명(인자)} == 함수로 다시한번 구성해야 클릭할 때 결과값 출력.
        */}
        <button onClick={() => num(100)}>숫자 출력</button>
      </p>
    </div>
  );
};

export default Event1;
