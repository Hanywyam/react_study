import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";

const Navigation = () => {
  return (
    <div>
      <h2>Navigation</h2>
      {/* root 상대 경로(href="/")로 작성 
        a태그는 전체페이지가 새로고침됨.
        리액트는 싱글페이지 작업으로 환경에 맞지 않아 사용하지 않음.*/}
      <ul>
        <li>
          {/* <a href="/">Home</a> */}
          {/* Link 태그
            : 빌드 시, a태그로 변환. 
              a와 같은 역할을 하나 새로고침 안됨. */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* <a href="/about">about</a> */}
          <Link to="/about">About</Link>
        </li>
        <li>
          {/* <a href="/product">product</a> */}
          <Link to="/products">Products</Link>
        </li>
      </ul>

      {/* 경로 설정 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default Navigation;
