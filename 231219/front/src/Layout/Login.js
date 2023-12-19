import { useState, useCallback } from "react";
import { Container, Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");
  const [formData, setFormData] = useState({
    userId: "",
    userPw: "",
  });
  // const { userId, userPw } = formData;

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }, []);

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        const res = await axios.post("/login", formData);

        // 문제가 생겼을 때 검증할 수 있도록 조건문
        if (res.data.error) {
          throw new Error("로그인 실패", res.data.error);
        }

        alert("로그인 성공: ", res.data);
        navigate("/");
      } catch (err) {
        console.log("로그인 오류: ", err);
        setErrMsg("아이디나 비밀번호가 틀렸습니다.");
      }
      console.log("전송된 id, pw: ", formData);
      // 연습용 확인차원. 실제로 사용하면 보안상 큰일남
    },
    [formData, navigate]
  );

  return (
    <Container className="mt-3">
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>아이디</Form.Label>
          <Form.Control
            type="text"
            placeholder="아이디를 입력하세요"
            name="userId"
            value={FormData.userId}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호를 입력하세요"
            name="userPw"
            value={FormData.userPw}
            onChange={handleChange}
          />
        </Form.Group>

        {errMsg && <Alert variant="danger">{errMsg}</Alert>}

        <Button variant="primary" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
