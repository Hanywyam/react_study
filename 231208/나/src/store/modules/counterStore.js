// counterStore.js
// 액션타입 정의
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const CHANGE_COLOR = "counter/CHANGE_COLOR";

// 액션 생성자 정의
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const changeColor = (color) => ({ type: CHANGE_COLOR, color });

// 초기값 설정
const initialState = {
  num: 1,
  color: "#222",
  colors: ["#65b741", "#7e57c2", "#ea80fc", "#00bcd4", "#9bb8cd"],
};

// 리듀서 설정
const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        num: state.num + 1,
      };
    case DECREASE:
      return {
        ...state,
        num: state.num - 1,
      };
    case CHANGE_COLOR:
      return {
        ...state,
        color: action.color,
      };
    default:
      return state;
  }
};

// 리듀서 함수 보내기
export default counter;
