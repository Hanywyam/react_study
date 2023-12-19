import { useCallback, useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginButton = () => (
  <Link to="/login">
    <Button variant="warning">로그인</Button>
  </Link>
);

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // 로그인(세션유지)
  useEffect(() => {
    const getUserSession = async () => {
      try {
        const res = await axios.get("/login");
        setUser(res.data.user);
      } catch (err) {
        console.log("세션 오류 :", err);
      }
    };
    getUserSession();
  },[]);

  // 로그아웃
  const handleLogout = useCallback(async () => {
    try {
      const res = await axios.get("/logout");
      setUser(null);
      navigate("/");
    } catch (err) {
      console.log("로그아웃 오류 :", err);
    }
  }, [navigate]);

  return (
    <Container className="mt-3">
      <h2>Home</h2>
      {user ? (
        <div>
          <h3>환영합니다 {user.userId}님</h3>
          <Button variant="primary" onClick={handleLogout}>
            로그아웃
          </Button>
        </div>
      ) : (
        <div>
          <h3>로그인 해 주세요</h3>
          <LoginButton />

          <Link to="/signup" style={{ marginLeft: 10 }}>
            <Button variant="success">회원가입</Button>
          </Link>
        </div>
      )}
    </Container>
  );
};

export default Home;
