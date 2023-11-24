import React, { useEffect, useState } from "react";
import { FaBeer } from "react-icons/fa";
import { IoArrowUpCircle } from "react-icons/io5";
import topTgg from "./style/mainTopTgg.module.css";

// TOP 올라가는 버튼
const MainTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const showPage = 700;
      const currentScrollY = window.scrollY;

      if (currentScrollY > showPage) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showBtn && (
        <a
          href="#"
          onClick={scrollTop}
          className={`${topTgg.topTgg} ${showBtn ? topTgg.show : ""}`}>
          <IoArrowUpCircle style={{ width: 100, height: 100 }} />
        </a>
      )}
    </div>
  );
};
export default MainTop;
