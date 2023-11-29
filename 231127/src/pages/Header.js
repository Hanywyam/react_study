import React, { lazy } from "react";
import headerStyle from "../styles/Header.module.css";
// lazy 로딩. 클릭 할 때 불러와 사용
const Navigation = lazy(() => import("./Navigation"));

const Header = () => {
  return (
    <header className={headerStyle.wrapper}>
      <h1 className={headerStyle.logo}>로고</h1>
      <Navigation />
    </header>
  );
};

export default Header;
