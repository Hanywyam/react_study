import { useState } from "react";
import Page from "./Page";
import { UserData } from "./state/userData";
import { ThemeContext } from "./state/ThemeContext";

// useContext :hook을 이용하여 컴포넌트들의 상태, 스타일 공유.
const Context2 = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <UserData.Provider value={"리액트"}>
      <h2>Context2</h2>
      {/* context는 중첩 사용 가능. 순서도 상관 없음. */}
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </UserData.Provider>
  );
};

export default Context2;
