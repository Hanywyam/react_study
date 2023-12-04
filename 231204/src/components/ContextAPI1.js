import React, { useState } from "react";
import Message from "./contextAPI1/Message";
import Button from "./contextAPI1/Button";
import Title from "./contextAPI1/Title";

const ContextAPI1 = () => {
  const [lang, setLang] = useState("en");
  const handleToggle = () => {
    setLang(lang === "en" ? "kr" : "en");
  };
  return (
    <div>
      <h2>Context</h2>
      <p>전역 상태를 공유하거나 컴포넌트 간의 데이터를 전달할 때 사용</p>
      <p>사용자 로그인정보, 앱 환경 설정, 테마 등</p>
      <hr />

      <Button lang={lang} handleToggle={handleToggle} />
      <Title lang={lang} />
      <Message lang={lang} />
    </div>
  );
};

export default ContextAPI1;
