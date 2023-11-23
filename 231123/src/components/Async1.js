import React, { useEffect, useState } from "react";
import axios from "axios";

// 외부에 불러온 데이터(API)를 내부로 불러오기
// 리액트의 외부데이터는 조건이 충족될 때 불러오도록 작성.
// 1) useEffect 사용
const Async1 = () => {
  // 데이터를 담을 장소(배열) 생성.
  const [data, setData] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/posts";

  /* 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => setData(json));
  }, []); // [] 의존성 배열의 영역을 비워두면 한 번만 호출.
  */

    
  // 2) 액시오스 사용
  // axios.get(URL).then((res) => setData(res));
  useEffect(() => {
    axios.get(URL).then((res) => setData(res));
  }, []);
 

  /* 
  // Async 사용
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      setData(data);
    };
    getData();
  },[]);
 */
  /* 
  // Async + axios 사용 : 가장 코드가 간결해서 많이 사용
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(URL);
      setData(res.data);
    };
    getData(data);
  }, []);
 */
  return (
    <div>
      <h2>Async1</h2>
      <ol>
        {data.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body.substr(0, 41)}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Async1;
