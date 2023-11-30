import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import NewsEnter from "./NewsEnter";
import NewsHealth from "./NewsHealth";
import NewsScience from "./NewsScience";
import NewsSports from "./NewsSports";
import NewsTech from "./NewsTech";
import NotFoundPage from "./NotFoundPage";
import NewsNav from "./NewsNav";

const Home = () => {
  return (
    <div>
      {/* 네비게이션 */}
      <NewsNav />
      {/* 화면 설정 */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/enter" element={<NewsEnter />} />
        <Route path="/health" element={<NewsHealth />} />
        <Route path="/science" element={<NewsScience />} />
        <Route path="/sport" element={<NewsSports />} />
        <Route path="/tech" element={<NewsTech />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default Home;
