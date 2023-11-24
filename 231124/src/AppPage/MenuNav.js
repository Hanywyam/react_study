import React, { useState } from "react";
import Navstyle from "./style/menuNav.module.css";

// 메뉴바 누르면 메뉴창 나타남.
const MenuNav = () => {
  const [isShow, setIsShow] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsShow(!isShow);
  };

  return (
    <nav>
      <a href="#" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </a>

      <ul style={{ right: isShow ? "30px" : "-60vw" }}>
        <li>
          <span></span>
        </li>
        <li>
          <a href="home">home</a>
        </li>
        <li>
          <a href="about">about</a>
        </li>
        <li>
          <a href="products">products</a>
        </li>
        <li>
          <a href="contact">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuNav;
