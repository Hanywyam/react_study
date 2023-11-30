import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./NewsPage";

const NewsAPI = () => {
  const [category, setCategory] = useState("all");

  // 상위 부모에게 전달될 콜백함수
  // const onSelect = () => (newCategory) => setCategory(category);

  return (
    <div>
      <h2>NewsAPI</h2>
      {/* <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} /> */}

      <Routes>
        {/* 
          :category 실제 매개변수 이름.
          ? 해당 매개변수가 선택적임을 나타내는 값. 이 값을 쓰려면 useParams가 반드시 필요.  
        */}
        <Route path="/:category?" element={<NewsPage />} />
      </Routes>
    </div>
  );
};

export default NewsAPI;
