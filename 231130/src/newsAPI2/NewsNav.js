import { Link, Route, Routes } from "react-router-dom";
import { NewsNavi } from "./NewsStyle";

const NewsNav = () => {
  return (
    <NewsNavi>
      <ul>
        <li>
          <Link to="/">전체 보기</Link>
        </li>
        <li>
          <Link to="/enter">연예</Link>
        </li>
        <li>
          <Link to="/health">건강</Link>
        </li>
        <li>
          <Link to="/science">과학</Link>
        </li>
        <li>
          <Link to="/sport">스포츠</Link>
        </li>
        <li>
          <Link to="/tech">기술</Link>
        </li>
      </ul>
    </NewsNavi>
  );
};

export default NewsNav;
