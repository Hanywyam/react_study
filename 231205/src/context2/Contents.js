import { useContext } from "react";
import styles from "./context2.module.css";
import { UserData } from "./state/userData";
import { ThemeContext } from "./state/ThemeContext";

const Contents = () => {
  const user = useContext(UserData);
  const { isDark } = useContext(ThemeContext);

  return (
    <main
      className={styles.contents}
      style={{
        background: isDark ? "#000" : "#eee",
        color: isDark ? "#fff" : "#000",
      }}>
      <h3>{user}님은 로그인 중입니다.</h3>
    </main>
  );
};

export default Contents;
