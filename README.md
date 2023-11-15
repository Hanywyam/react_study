# react_study

## 231115

- 리액트 작업 시, 모든 작업은 src 안에 작업.
- 작업 시, '컴퍼넌트' 정리용 파일을 만들어 새로 생성하는 컴포넌트를 폴더 안에 정리.

#### 컴포넌트 작성 방법

- 방법1) 컴포넌트.jsx 로 작성
- 방법2) 컴포넌트 .js 로 작성
- 방법3) 컴포넌트 .js 로 생성 후 Reactjs code snippets의 단축키 사용 **(가장 간편해서 많이 쓰게 됩니다.)**

  - rsf 단축키: 선언 함수형 컴포넌트 (funtion)
  - rsc 단축키: 선언 표현식 컴포넌트 (화살표함수)

- 컴포넌트 내부: 화면이 보여지는 부분
  - 태그는 반드시 닫아야 함
  - 빈 태그도 반드시 닫아야 함
  - return 키워드 뒤에 한 줄 이상 작성 시, div, section, article 등의 하위 태그를 감싸는 태그 필요

#### style 적용

- 스타일 직접 적용
- 스타일 변수로 적용
- 스타일 외부 문서로 적용
- 스타일 프레임워크로 적용

#### props 설정

- 컴포넌트 생성 후 메인 컴포넌트에 연결하여 사용.
- 하위 컴포넌트는 갯수 제한 없음.
- 하위 컴포넌트에 자식 컴포넌트를 생성하여 연결 가능.
- 자식 컴포넌트도 갯수 제한 없음.
  - 자식 컴포넌트 연결 방법
    - props
    - 컴포넌트에 전달할 정보를 담고 있는 자바스크립트 매게이자
    - 리액트 컴포넌트 속성
    - 부모 -> 자식 컴포넌트로 전달
    - 객체형으로 속성을 key로 인식
    - <자식 컴포넌트 props=전달값 />
    - 전달값: {숫자}, '문자', {논리연산}, {state}, {function} ...

#### build

#### 다른 장소에서 이동하여 작업할 파일 생성

#### event

- 예전 버전의 자바스크립트 스타일
  - js: 'onclick', 'onsubmit'
  - JSX: 'onClick', 'onSubmit'
- 'on-'접두어 + 첫글자 대문자인 이벤트명
- 'on-'접두어를 사용한 모든 이벤트 사용 가능.
- onClick={함수명}

<details>
<summary>접기/펼치기</summary>

```react
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
    </div>
  );
};

export default Event1;

```

</details>

- 이벤트 발생 후 결과값을 나타낼 때.
  - {()=>함수명(인자)} 로 작성

```react
        {/* 함수를 만들고 매개변수로 100 입력 시, 100+100 = 200 콘솔 출력 */}
        {/*
          <button onClick={num(100)}>숫자 출력</button>
          {num(100)} == 함수 즉시 호출. 처음부터 실행.

          {()=>함수명(인자)} == 함수로 다시한번 구성해야 클릭할 때 결과값 출력.
        */}
        <button onClick={() => num(100)}>숫자 출력</button>
```

#### target

#### map()

- .map((elem, index) => {});
  - 새로운 배열로 반환
  - .map() 사용 시 고유한 key값을 부여해야 함
  - index의 경우 단순 출력이 필요한 경우만 사용 권장
  - 삭제, 수정, 추가 등에서는 index가 아닌 key 혹은 고유 id 사용 권장
  - 대부분 안정적인 고유성을 부여하기 위해 배열 내부 요소에 id를 작성하여 key로 사용

## 231114

#### react 기초

- [react site](https://ko.legacy.reactjs.org/)
