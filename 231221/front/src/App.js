import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Route, Routes, useNavigate, Link } from "react-router-dom";
import Home from "./Layout/Home";
import SignUp from "./Layout/SignUp";
import Login from "./Layout/Login";
import PostList from "./Layout/PostList";
import PostWrite from "./Layout/PostWrite";
import PostRead from "./Layout/PostRead";
import PostUpdate from "./Layout/PostUpdate";

const App = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            React
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate("/posts")}>게시판</Nav.Link>
              <Nav.Link onClick={() => navigate("/signup")}>회원가입</Nav.Link>
              <Nav.Link onClick={() => navigate("/login")}>로그인</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/write" element={<PostWrite />} />
        <Route path="/posts/:id" element={<PostRead />} />
        <Route path="/posts/update/:id" element={<PostUpdate />} />
      </Routes>
    </>
  );
};

export default App;
