import { Routes, Route } from "react-router-dom";
import Categories from "./Categories";
import BookList from "./BookList";

const kakaoAPI = () => {
  return (
    <div>
      <h1>kakao book API</h1>
      <Categories />
      <hr />
      <Routes>
        <Route path="/" element={<h2>첫페이지</h2>} />
        <Route path="/book" element={<BookList />} />
        <Route path="/book/:title" element={<BookList />} />
      </Routes>
    </div>
  );
};

export default kakaoAPI;
