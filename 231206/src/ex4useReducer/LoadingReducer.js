// LoadingReducer.js
// 로딩 상태값 반환
// "LOADING", "SUCCESS", "ERROR";
// loading: true, false, ...

export const reducer = (state, action) => {
  console.log("리듀서 실행", state, action);

  switch (action.type) {
    case "LOADING":
      return { loading: true, data: null, error: null };

    case "SUCCESS":
      return { loading: false, data: action.data, error: null };

    case "ERROR":
      return { loading: false, data: null, error: action.error };

    default:
      return state;
  }
};
