import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, changeColor } from "../store/slices/countSlice";

const Counter = () => {
  const { num, color, colors } = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleDecrease = () => dispatch(decrease());  
  
  return (
    <div>
      <h2 style={{ color: color }}>count : {num}</h2>
      <p>
        <button onClick={() => dispatch(increase())}>🔼+1</button>
        <button onClick={handleDecrease}>🔽-1</button>
      </p>
      
    </div>
  );
};

export default Counter;
