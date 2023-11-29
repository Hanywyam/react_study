import React from "react";
import { useNavigate } from "react-router-dom";

const History = () => {
  const navigate = useNavigate();
  // 새로고침이 아니라, 컴퍼넌트가 변경됨.
  const goHome = () => navigate("/");
  // 바로 직전에 있던 이전 컴퍼넌트로 이동.
  const goBack = () => navigate(-1);
  // 이후 페이지 이동. 사용은 잘 안함.
  const goFoward = () => navigate(1);
  return (
    <div>
      <button onClick={goBack}>이전으로</button>
      <button onClick={goHome}>홈으로</button>
      <button onClick={goFoward}>이후로</button>
    </div>
  );
};

export default History;
