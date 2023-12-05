import { useContext } from "react";
import styles from "./context2.module.css";
import { ThemeContext } from "./state/ThemeContext";
import { ColorData } from "./state/ColorData";

const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const { background, color } = useContext(ColorData);

  return (
    <footer
      className={styles.footer}
      style={{
        background: isDark ? "#000" : "#eee",
        color: isDark ? "#fff" : "#000",
      }}>
      <button
        className={styles.btn}
        style={{
          background: background,
          color: color,
        }}
        onClick={() => setIsDark(!isDark)}>
        Dark Mode
      </button>
    </footer>
  );
};

export default Footer;
