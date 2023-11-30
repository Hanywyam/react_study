import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsList = ({ category }) => {
  const [loading, setLoading] = useState(false);
  const [newsArticle, setNewsArticle] = useState([]);

  useEffect(() => {
    const newData = async () => {
      try {
        const URL = "https://newsapi.org/v2/top-headlines?country=kr";
        const query = category === "all" ? "" : "&category=" + category;
        const APPKEY = "&apiKey=d0e87ff2418249e0b41a830bf6a1efe3";
        const res = await axios.get(URL + query + APPKEY);
        console.log(res.data.articles);
        setNewsArticle(res.data.articles);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    newData();
  }, [category]);

  if (loading) <h2>불러오는중......</h2>;

  return (
    <div>
      {newsArticle.map((news) => (
        <NewsItem key={news.publishedAt} news={news} />
      ))}
    </div>
  );
};
export default NewsList;
