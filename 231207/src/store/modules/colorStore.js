// colorStore.js
// redux 특징
// 1. action 생성 const 액션명 = "파일명(구분값)/액션명";
const ORANGE = "bg/ORANGE";
const TEAL = "bg/TEAL";
const SALMON = "bg/SALMON";

// 2. action 내보내기 dispatch(()=>{ type: AAA })
export const orange = () => ({ type: ORANGE });
export const teal = () => ({ type: TEAL });
export const salmon = () => ({ type: SALMON });

// 3. 초기값 설정
const initialState = { bg: "#222" };

// 4. 리듀서 설정
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORANGE:
      return { ...state, bg: "orange" };
    case TEAL:
      return { ...state, bg: "teal" };
    case SALMON:
      return { ...state, bg: "salmon" };
    default:
      return state;
  }
};

export default reducer;
