import React from "react";
import MenuNav from "./MenuNav";
import MainImg from "./MainImg";
import MainSwiper from "./MainSwiper";
import MainTop from "./MainTop";
import main from "./style/main.module.css";

const Main = () => {
  return (
    <div>
      <header>
        <h1>로고</h1>
        <MenuNav />
      </header>

      <main>
        <div className={main.txtBox}>
          <h2>We are Creative Agency</h2>
          <p>Working with brands all over the world</p>
        </div>

        <MainImg />
        <MainSwiper />
        <MainTop />
      </main>

      <footer>
        <p>
          ⓒ MadeByProzymaDesign 2023. Web Design ltaly Compony. 02130380385. All
          Right Reserved. Privacy Policy.
        </p>
      </footer>
    </div>
  );
};

export default Main;
