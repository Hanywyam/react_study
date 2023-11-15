import React from "react";

/*
  props
  컴포넌트에 전달할 정보를 담고 있는 자바스크립트 매게이자
  리액트 컴포넌트 속성
  부모 -> 자식 컴포넌트로 전달
  객체형으로 속성을 key로 인식

  <자식 컴포넌트 props=전달값 />
  전달값: {숫자}, '문자', {논리연산}, {state}, {function} ...

*/

// (자식으로 사용할) 하위 컴포넌트 생성
const Coffee = (props) => {
  return (
    <>
      {/* props = {name: '아메리카노'} 객체 형태로 받아오기 때문에, 객체 방식으로 읽음 */}
      <h3>하위 컴포넌트 1: {props.name} </h3>
    </>
  );
};

// 구조분해, 비구조할당
const Tea = (props) => {
  const { name } = props;

  return (
    <>
      <h3>하위 컴포넌트 2: {name}</h3>
    </>
  );
};

// 실제 가장 많이 사용하는 방법
const Drink = ({ name, option }) => {
  return (
    <>
      <h3>
        하위 컴포넌트 3: {name},{option}
      </h3>
    </>
  );
};

const Basic6 = () => {
  return (
    <div className="borderTop">
      {/* 자식 컴포넌트 */}
      {/* Coffee 컴포넌트에 내가 만든 속성인 name의 값 "아메리카노"를 전달 */}
      <Coffee name="아메리카노" />
      <Coffee name="카페라떼" />
      <Coffee name="바닐라라떼" />

      <Tea name="보이차" />
      <Drink name="탄산수" option="얼음 추가 가능" />
    </div>
  );
};

export default Basic6;
