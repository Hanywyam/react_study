import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Products from "./Products";
import NotFoundPage from "./NotFoundPage";

const data = [
  { id: 1, title: "html", info: "html 페이지 입니다." },
  { id: 2, title: "css", info: "css 페이지 입니다." },
  { id: 3, title: "js", info: "js 페이지 입니다." },
  { id: 4, title: "react", info: "react 페이지 입니다." },
];

const Name = () => {
  return (
    <div>
      {/* 네이게이션 */}
      <ul>
        <li>
          <Link to="/">첫페이지</Link>
        </li>
        <li>
          <Link to="/abt">어바웃</Link>
        </li>
        <li>
          <Link to="/prof">프로필</Link>
        </li>
        <li>
          {/* <Link to="/prod">제품</Link> */}
          <hr />
          <ul>
            <li>
              <Link to="/prod/html">html</Link>
            </li>
            <li>
              <Link to="/prod/css">css</Link>
            </li>
            <li>
              <Link to="/prod/js">js</Link>
            </li>
            <li>
              <Link to="/prod/react">react</Link>
            </li>
          </ul>
        </li>
      </ul>
      {/* 화면 설정: 첫페이지, 어바웃, 프로필, 제품(하위 >html,css,js,react) */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abt" element={<About />} />
        <Route path="/prof" element={<Profile />} />
        {/* useParams를 이용해 name값을 가져옴 */}
        <Route path="/prod/:name" element={<Products data={data} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default Name;
