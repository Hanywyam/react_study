import React, { useState } from "react";
import Button from "./contextAPI2/Button";
import Message from "./contextAPI2/Message";
import Title from "./contextAPI2/Title";
import LangContext from "./contextAPI2/LangContext";

const ContextAPI2 = () => {
  const [lang, setLang] = useState("en");
  const handleToggle = () => {
    setLang(lang === "en" ? "kr" : "en");
  };
  return (
    <LangContext.Provider value={lang}>
      {/* context를 사용하려면, 상태 관리 영역이 따로 필요 */}
      <Button lang={lang} handleToggle={handleToggle} />
      <Message />
      <Title />
    </LangContext.Provider>
  );
};

export default ContextAPI2;

/* 
  .provider : 컨텍스트 값 제공
  Provider로 하위 컴포넌트를 감싸면 React.createContext()에 저장한 전역 데이터에 접근 가능.
  <MyContext.Provider value={어떤 값이든 제공}>
  <하위 컴포넌트>
  <MyContext.Provider>

  접근)
  .useContext();
  .Consumer
*/
