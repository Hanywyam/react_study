import React, { useState, useEffect } from "react";
import axios from "axios";

const Async2 = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        // 데이터 응답 성공하면
        setData(res.data);
        // 로딩 상태값 삭제
        setLoading(false);
        setErr("");
      })
      // 에러 또는 응답 실패했을 때 데이터 삭제
      .catch((err) => {
        setData([]);
        setLoading(false);
        setErr("데이터 오류, 응답에 실패했습니다.");
      });
  }, []);

  return (
    <>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <ol>
          {data.map((item) => (
            <li key={item.id}>
              <p>{item.title.substr(0, 41)}</p>
            </li>
          ))}
        </ol>
      )}
      <h3 style={{ color: "red" }}>{err}</h3>
    </>
  );
};

export default Async2;
