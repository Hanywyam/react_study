import React, { useEffect, useRef } from "react";
import MainImgStyle from "./style/MainImg.module.css";

//스크롤이벤트 이미지 => useRef :돔 직접 제어
const MainImg = () => {
  // const path = process.env.PUBLIC_URL;
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const yOffset = offset * 0.06;

      if (img1Ref.current && img2Ref.current) {
        img1Ref.current.style.transform = `translateY(${yOffset}px)`;
        img2Ref.current.style.transform = `translateY(-${yOffset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={MainImgStyle.imgBox}>
        <img ref={img1Ref} src="images/SplashColor.png" alt="물감튀어" />
        <img ref={img2Ref} src="images/CartoonMac.png" alt="컴퓨터타닥" />
      </div>
      <p className={MainImgStyle.txtBox}>
        Leading digital agency with solid design and development expertise. We
        focus on building Webflow wevsites.
      </p>
    </>
  );
};

export default MainImg;
