import React, { useEffect, useState } from "react";
import axios from "axios";
import { NewsLi } from "./NewsStyle";

const NewsEnter = () => {
  const API_KEY = "d0e87ff2418249e0b41a830bf6a1efe3";
  const URL = `https://newsapi.org/v2/top-headlines?country=kr&category=entertainment&apiKey=${API_KEY}`;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(URL);
        setData(res.data.articles);
        setErr(null);
      } catch (error) {
        setErr("데이터를 불러오는 중 에러가 발생");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) return <h3>로딩중...</h3>;
  if (err) return <h3>데이터 오류입니다.</h3>;

  return (
    <NewsLi>
      <ul>
        {data.map((news) => (
          <li key={news.publishedAt}>
            <a href={news.url} target="_blank">
              <img
                src={news.urlToImage}
                alt={news.title}
              />
            </a>
            <p>
              <strong>{news.title}</strong>
              {news.description}
            </p>
          </li>
        ))}
      </ul>
    </NewsLi>
  );
};

export default NewsEnter;
