import { NavLink } from "react-router-dom";
import { Navi } from "./NikeStyle";

const Nav = ({ menuLi }) => {
  return (
    <Navi>
      {menuLi.map((list) => (
        <li key={list.id}>
          <NavLink to={`/${list.categ}`}>{list.categ}</NavLink>
        </li>
      ))}
    </Navi>
  );
};

export default Nav;
