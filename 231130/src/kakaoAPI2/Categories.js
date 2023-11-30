import { NavLink } from "react-router-dom";
import myStyle from "./categories.module.css";

const categy = [
  { name: "berr", authors: "베르" },
  { name: "berr", authors: "베르베르" },
  { name: "hang", authors: "한강" },
  { name: "baek", authors: "백희나" },
  { name: "wash", authors: "청소" },
  { name: "jane", authors: "제인구달" },
  { name: "html", authors: "html" },
  { name: "node", authors: "node" },
  { name: "SQL", authors: "SQL" },
  { name: "JAVA", authors: "JAVA" },
];
const Categories = () => {
  return (
    <ul className={myStyle.categWrap}>
      {categy.map((list) => (
        <li key={list.name}>
          <NavLink
            activeClassName={myStyle.active}
            to={list.authors === "베르" ? "/" : `/${list.authors}`}
            end={list.authors === "베르"}>
            {list.authors}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
