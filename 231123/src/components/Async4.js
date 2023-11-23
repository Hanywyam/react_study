import React, { useEffect, useState } from "react";
import axios from "axios";

const Async4 = () => {
  const API_KEY = "d0e87ff2418249e0b41a830bf6a1efe3";
  const URL = `https://newsapi.org/v2/top-headlines?country=kr&category=sports&apiKey=${API_KEY}`;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(URL);
        setData(res.data.articles);
        setError(null);
      } catch (err) {
        setError("데이터를 불러오는 중 에러가 발생");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <h2>로딩중...</h2>;
  if (error) return <h2>오류입니다.</h2>;

  return (
    <>
      <ul>
        {data.map((news) => (
          <li key={news.publishedAt}>
            <a href={news.url} target="_blank">
              <img
                src={news.urlToImage}
                alt={news.title}
                style={{ width: 200 }}
              />
              <h3>{news.title}</h3>
              <p>{news.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Async4;
