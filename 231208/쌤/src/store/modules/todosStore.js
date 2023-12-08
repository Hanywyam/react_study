//todosStore.js
// 액션타입 정의
const INPUT = "todoList/INPUT";
const ADD_LIST = "todoList/ADD_LIST";
const MODIFY = "todoList/MODIFY";
const DELKEY = "todoList/DELKEY";

// 액션 생성자 정의
export const input = () => ({ type: INPUT });
export const addList = () => ({ type: ADD_LIST });
export const modify = () => ({ type: MODIFY });
export const delKey = () => ({ type: DELKEY });

// 초기값 설정
const initialState = {
  input: "",
  list: [],
};

// 리듀서 설정
const todoList = (state = initialState, action) => {
  switch (action.type) {
    case INPUT:
      return {
        ...state,
      };
    case ADD_LIST:
      return {
        ...state,
      };
    case MODIFY:
      return {
        ...state,
      };
    case DELKEY:
      return {
        ...state,
      };
    default:
      return state;
  }
};

// 리듀서 함수 보내기
export default todoList;
