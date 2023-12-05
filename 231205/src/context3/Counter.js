import { useContext, useState } from "react";
import { CounterContext } from "./state/CounterContext";

const Counter = () => {
  const { count, handleUp, handleDown } = useContext(CounterContext);
  /* 
  const [count, setCount] = useState(0);

  const plusBtn = () => {
    setCount(count + 1);
  };

  const minusBtn = () => {
    setCount(count - 1);
  };
 */

  return (
    <div>
      <h2>카운트 : {count}</h2>
      <p>
        <button onClick={() => handleUp()}>증가</button>
        <button onClick={() => handleDown()}>감소</button>
      </p>
    </div>
  );
};

export default Counter;
