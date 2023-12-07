import { useDispatch, useSelector } from "react-redux";
import { orange, teal, salmon } from "../store/modules/colorStore";

const Color = () => {
  // useSelector(()=>{}); redux 스토어의 상태에 접근 가능하게 해 줌. 여러번 호출이 가능.
  // 색상 상태 가져옴
  const stateColor = useSelector((state) => state.colorA.color);

  // useDispatch(); redux 스토어에 액션을 디스패치하는데 사용. 한번만 호출.
  // 색상 변경 액션을 디스패치
  const dispatch = useDispatch();

  return (
    <div>
      <h2 style={{ backgroundColor: stateColor }}>Redux: {stateColor}</h2>
      <p>
        <button onClick={() => dispatch(orange())}>orange</button>
        <button onClick={() => dispatch(teal())}>teal</button>
        <button onClick={() => dispatch(salmon())}>salmon</button>
      </p>
    </div>
  );
};

export default Color;
