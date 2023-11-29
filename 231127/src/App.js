import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import FixedButton from "./pages/FixedButton";
import PreLoader from "./components/PreLoader";
import UseMemo1 from "./ex/UseMemo1";
import UseMemo2 from "./ex/UseMemo2";
import UseMemo3 from "./ex/UseMemo3";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // if () 데이터를 불러오면
    const timeoutLoader = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutLoader);
  }, []);

  return (
    // 로딩이 완료되기 전에 <PreLoader />
    loading ? (
      <PreLoader />
    ) : (
      // 완료되면 아래 컴포넌트
      <>
        <Header />
        <Main />
        <Footer />
        <FixedButton />
        {/* <UseMemo1 /> */}
        {/* <UseMemo2 /> */}
        {/* <UseMemo3 /> */}
      </>
    )
  );
};

export default App;
