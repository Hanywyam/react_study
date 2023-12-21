import { useCallback, useState } from "react";
import { Container, Button, Form, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState({
    userId: "",
    userPw: "",
    userGroup: "",
    userEmail: "",
  });
  const { userId, userPw, userGroup, userEmail } = formData;

  // 사용자 입력 값을 폼 데이터에 업데이트
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/signup", formData);

      if (res.status !== 200) {
        // 서버가 요청을 제대로 처리하지 못하면
        throw new Error("회원가입 실패");
      }

      alert("회원가입 성공");
      navigate("/");
    } catch (err) {
      setMsg(err.message);
    }
    console.log("formData : ", formData);
  };

  return (
    <Container className="mt-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>아이디</Form.Label>
          <Form.Control
            type="text"
            placeholder="아이디를 입력하세요"
            name="userId"
            value={userId}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호를 입력하세요"
            name="userPw"
            value={userPw}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>소속</Form.Label>
          <Form.Control
            type="text"
            placeholder="소속을 입력하세요"
            name="userGroup"
            value={userGroup}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>이메일</Form.Label>
          <Form.Control
            type="email"
            placeholder="이메일을 입력하세요"
            name="userEmail"
            value={userEmail}
            onChange={handleChange}
          />
        </Form.Group>

        {msg && <Alert variant="danger">{msg}</Alert>}

        <Button variant="primary" type="submit">
          회원가입
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
