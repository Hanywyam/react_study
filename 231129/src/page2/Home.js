import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Products from "./Products";
import Board from "./Board";
import NotFoundPage from "./NotFoundPage";
import Nav from "./Nav";

const Home = () => {
  return (
    <div>
      {/* 화면 설정 */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/abt" element={<About />} />
        <Route path="/prdt" element={<Products />} />
        <Route path="/board" element={<Board />} />
        {/* 잘못된 페이지 연결 시 보여지는 경로 연결 
            -> 항상 마지막에 작성. */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* 네비게이션 */}
      <Nav />
    </div>
  );
};

export default Home;
