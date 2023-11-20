import React, { useState } from "react";

const UseRef1 = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const changeId = (e) => {
    const { value } = e.target;
    setUserId(value);
  };
  const changePw = (e) => {
    const { value } = e.target;
    setUserPw(value);
  };

  return (
    <div>
      <h2>UseRef</h2>
      <p>컴포넌트 렌더링과 상관없이 값을 보관</p>
      <ul>
        <li>DOM에 직접 접근하는 경우</li>
        <li>ref는 컴포넌트 안에서만 동작</li>
        <li>input의 focus나 scroll 이벤트, 애니메이션 사용 시</li>
      </ul>
      <hr />

      <p>
        <input type="text" value={userId} onChange={changeId} />
        <input type="text" value={userPw} onChange={changePw} />
        {/* 버튼 누르면, 데이터 삭제 */}
        <button>초기화</button>
      </p>
      <h4>
        id: {userId} / pw: {userPw}
      </h4>
    </div>
  );
};

export default UseRef1;

/* 
선언
const a = useRef();

사용
a.current.id = "userID";
*/
