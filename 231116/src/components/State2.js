import React, { useState } from "react";

const State2 = () => {
  // 같은 상태값을 이용하면 값이 같이 들어가 함께 움직임.
  // 상태 값을 따로 사용시 개별 작성.
  const [isShow, setIsShow] = useState(false);
  const [isHide, setIsHide] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const handleShow = () => {
    setIsShow(true);
  };
  const handleHide = () => {
    setIsHide(false);
  };
  const handleToggle = () => {
    setIsToggle(!isToggle); //!부정연산자, !(false) -> true, !(true) -> false
  };

  return (
    <div>
      <h2 className="borderTop">state2</h2>
      <p>
        {/* 상태를 이용한 토글작업 */}
        <button onClick={handleShow}>{isShow ? "show" : "hide"}</button>
        <button onClick={handleHide}>{isHide ? "show" : "hide"}</button>
        {/* 토글버튼: 한 번 클릭하면 hide, 두 번 클릭하면 show -> 반복 */}
        <button onClick={handleToggle}>{isToggle ? "hide" : "show"}</button>
      </p>
      {/* 삼항연산자를 이용해 handleShow 함수가 실행되어 참인 경우 박스 보임.
      조건식 ? true : false */}
      {isShow ? (
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: "orange",
            margin: 10,
          }}>
          box1
        </div>
      ) : null}
      <hr />
      {/* hide 버튼 클릭하면 box2가 보임 */}
      {isHide ? null : (
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: "tomato",
            margin: 10,
          }}>
          box2
        </div>
      )}
      <hr />
      {isToggle ? (
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: "forestgreen",
            margin: 10,
          }}>
          box3
        </div>
      ) : null}
      <hr />
      {/* AND 연산자 : 앞의 값이 참이어야만 뒤의 값을 출력 */}
      {isToggle && (
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: "navy",
            margin: 10,
            color: "#888",
          }}>
          box4
        </div>
      )}
      <hr />
      {/* or 연산자: 앞의 값이 거짓이어야만 뒤의 값 출력. 참인 상황이면 뒤의 값을 출력하지 않음 */}
      {isToggle || (
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: "teal",
            margin: 10,
          }}>
          box5
        </div>
      )}
    </div>
  );
};

export default State2;
