import React, { Suspense, lazy } from "react";
import "./App.css";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import FixedButton from "./pages/FixedButton";
import PreLoader from "./components/PreLoader";
// lazy 로딩. 필요할 때 불러와 사용
const Main = lazy(() => import("./pages/Main"));

const PreApp = () => {
  return (
    // Suspense 컴포넌트는 자식 컴포넌트가 로딩 상태일 때 폴백 UI컴포넌트(PreLoader)를 표시하도록 설계 됨. 따라서 내부에서 loading 상태를 검사하는 것이 필요하지 않음
    <Suspense fallback={<PreLoader />}>
      <Header />
      <Main />
      <Footer />
      <FixedButton />
    </Suspense>
  );
};

export default PreApp;
