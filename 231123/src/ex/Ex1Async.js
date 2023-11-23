import axios from "axios";
import React, { useEffect, useState } from "react";

const Ex1Async = () => {
  const [id, setId] = useState(null);
  const [post, setPost] = useState({}); // 값을 하나씩 받을 예정. 빈 객체.
  const [err, setErr] = useState(null);
  const URL = `https://jsonplaceholder.typicode.com/posts/${id}`;

  const getData = async () => {
    try {
      const responsive = await axios.get(URL);
      setPost(responsive.data);
      setErr(null);
    } catch (err) {
      setErr("no data");
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    !isNaN(id) ? getData() : alert("숫자만 입력하세요");
  };

  const changeInput = (e) => {
    const { value } = e.target;
    setId(value);
  };

  return (
    <>
      {/* 검색 창에서 아이디 넘버를 입력하면 해당 아이디를 가진 title 출력 */}
      <form onSubmit={handleSubmit}>
        <input type="search" value={id} onChange={changeInput} />
        <button type="submit">검색</button>
      </form>

      <h3>
        {post.id}: {post.title}
      </h3>
    </>
  );
};

export default Ex1Async;
