// CounterContext.js
import { createContext, useState } from "react";

// 생성(관리자)
export const CounterContext = createContext(null);

// 초기 상태와 업데이트 함수 설정
const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(1);
  // 함수 정의
  const handleUp = () => setCount(count + 1);
  const handleDown = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ count, handleUp, handleDown }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
