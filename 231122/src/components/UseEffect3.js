import React, { useState } from "react";
import UseEffect3sub from "./UseEffect3sub";

const UseEffect3 = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <section className="borderTop">
      <h2>useEffect3</h2>
      {/* 토글버튼 */}
      <button onClick={handleToggle}>{isToggle ? "숨김" : "보임"}</button>
      {isToggle && <UseEffect3sub />}
    </section>
  );
};

export default UseEffect3;
/* 
  useCallback(()=>{},[]);
  함수를 memoization 함. 즉, 이전에 계산된 값을 저장했다가 동일한 상황이 다시 발생하면 다시 계산하지 않고 저장된 값을 반환.
  주로 하위 컴포넌트에 콜백 함수를 전달 할 때 사용.
*/