/* 
  import React from 'react'; // node_modules에서 가져옴
    ㄴ 컴포넌트명: 첫글자는 반드시 대문자로 시작.
    ㄴ 연결 파일: .js, .jsx, .css, .png, .svg ...

    function 컴포넌트명() {}
    const 컴포넌트명 = () => {
      return (
        <> <- fragment
              JSX : javascript + XML
              화면에 보이는 영역
              html과 비슷하나 태그가 아님
              개발을 쉽게 하기 위해 태그 형식으로 사용
        </>
      )
    }

    export default 컴포넌트명; 기본으로 내보내는 컴포넌트
*/

import "./App.css";
import Event1 from "./components/Event1";
import Target from "./components/Target";
import Map from "./components/Map";
/* 
import Basic1 from "./components/Basic1";
import Basic2 from "./components/Basic2";
import Basic3 from "./components/Basic3";
import Basic4 from "./components/Basic4";
import Basic5 from "./components/Basic5";
import Basic6 from "./components/Basic6"; 
import Ex1 from "./ex/Ex1";
import Ex2 from "./ex/Ex2";
import Ex3 from "./ex/Ex3";
import Ex4 from "./ex/Ex4";
import Ex5 from "./ex/Ex5";*/

function App() {
  return (
    <>
      {/* 
      <Basic1 />
      <Basic2 />
      <Basic3 />
      <Basic4 />
      <Basic5 />
      <Basic6 />
      <Ex1 />
      <Ex2 />
      <Ex3 />
      <Ex4 />
      <Ex5 />
       */}
      <Event1 />
      <Target />
      <Map />
    </>
  );
}

export default App;
