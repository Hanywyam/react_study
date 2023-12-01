import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import { useParams } from "react";
import { Routes, Route } from "react-router-dom";
import { Logo } from "./NikeStyle";

const menuLi = [
  { id: 1, categ: "About" },
  { id: 2, categ: "product" },
  { id: 3, categ: "service" },
  { id: 4, categ: "board" },
  { id: 5, categ: "로그인" },
];

const Header = () => {
  // const categ = useParams();

  return (
    <div>
      <header>
        <Logo>
          <img src="/images/nike_logo.png" alt="logo" />
        </Logo>
      </header>

      <nav>
        <Routes>
          <Route path="/:categ?" element={<Nav menuLi={menuLi} />} />
        </Routes>
      </nav>

      <main>
        <Main menuLi={menuLi} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Header;
