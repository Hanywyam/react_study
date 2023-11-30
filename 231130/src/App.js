import React from "react";
import "./App.css";
import GlobalStyle from "./newsAPI2/globalStyle";
import Home from "./newsAPI2/Home";
import NewsAPI from "./newsAPI/NewsAPI";
import KakaoAPI from "./kakaoAPI/KakaoAPI";

function App() {
  return (
    <>
      {/* reset css */}
      {/* <GlobalStyle /> */}
      {/* <Home /> */}
      {/* <NewsAPI /> */}
      <KakaoAPI />
    </>
  );
}

export default App;
