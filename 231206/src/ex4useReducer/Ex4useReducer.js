import { reducer } from "./LoadingReducer";
import { useEffect, useReducer, useState, axios } from "react";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const Ex4useReducer = () => {
  // const [loading,setLoading] = useState(false); 이전에 이렇게 작업했다면, 이번에는 useReducer를 이용해서 작업.
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [state, dispatch] = useReducer(reducer, {loading: false,data: null, error:null}); 이렇게 적을 수도 있음.

  const { loading, error, data } = state;

  const getData = async () => {
    // LOADING 액션을 dispatch로 가져와 로딩 상태를 설정하고 데이터 가져옴
    dispatch({ type: "LOADING" });

    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      dispatch({ type: "SUCCESS", data: res.data });
    } catch (err) {
      dispatch({ type: "ERROR", error: err.message });
    }
  };
  // useEffect로 함수호출
  useEffect(() => {
    getData();
  }, []);

  // reducer 함수에서 가져오기
  if (loading) return <h2>로딩중입니다.</h2>;
  if (error) return <h2>오류입니다.</h2>;
  if (!data) return <h2>데이터가 없습니다.</h2>;

  return (
    <div>
      <h2>useReducer</h2>
      <ul>{data && data.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
      <button onClick={getData}>다시 불러오기</button>
    </div>
  );
};

export default Ex4useReducer;
