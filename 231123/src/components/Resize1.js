import React, { useEffect, useState } from "react";

// DOM 제어
const Resize1 = () => {
  const [width, setWidth] = useState(null);

  // 리사이즈 외부 함수
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log("리사이즈 시작");
    window.addEventListener("resize", handleResize);
    
    return () => {
      console.log("클린 업");
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    console.log(width);
  }, [width]);

  return (
    <>
      <h2>Resize1</h2>
    </>
  );
};

export default Resize1;
