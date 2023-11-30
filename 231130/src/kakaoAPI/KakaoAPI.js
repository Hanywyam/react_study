import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import KakaoPage from "./KakaoPage";

const KakaoAPI = () => {
  const [category, setCategory] = useState("");

  return (
    <div>
      <h2>kakao API</h2>

      <Routes>
        <Route path="/:category?" element={<KakaoPage />} />
      </Routes>
    </div>
  );
};

export default KakaoAPI;
