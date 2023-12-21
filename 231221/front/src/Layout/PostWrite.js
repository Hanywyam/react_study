import { useState, useCallback, useEffect } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PostWrite = () => {
  const navigate = useNavigate();
  const currentDate = new Date().toISOString(); // yyyy-mm-dd
  // .toLocaleString(); 문자열. server쪽에서 Date 타입을 설정했기 때문에 .toISOString() 사용
  const [user, setUser] = useState(null);

  const [form, setForm] = useState({
    title: "",
    content: "",
    writer: "홍길동",
    wdate: currentDate,
  });
  const { title, content, wdate, writer } = form;

  useEffect(() => {
    const getUserSession = async () => {
      try {
        const res = await axios.get("/login");
        setUser(res.data.user);
      } catch (error) {
        console.log("세션 정보 가져오기 오류", error);
      }
    };

    getUserSession();

    setForm((prevForm) => ({ ...prevForm, writer: user?.userId || "홍길동" }));
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleReset = () => {
    setForm({
      ...form,
      title: "",
      content: "",
      writer: user?.userId,
      wdate: currentDate,
    });
  };
  const handleSubmit = useCallback(async () => {
    if (!user) {
      alert("로그인을 해야 작성할 수 있습니다");
      navigate("/login");
      return;
    }
    if (!title || !content) {
      alert("제목이나 내용을 입력하세요");
    } else {
      const reCheck = window.confirm("내용을 저장하시겠습니까?");
      if (reCheck) {
        await axios.post("/posts/write", form);
        navigate("/posts");
      }
    }
  }, [form, navigate]);

  return (
    <Container className="mt-3">
      <h2 className="text-center">게시판 쓰기</h2>
      <Form>
        <Form.Control
          type="text"
          placeholder="제목을 입력하세요"
          className="my-3"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <Form.Control
          as="textarea"
          row={10}
          placeholder="내용을 입력하세요"
          className="my-3"
          name="content"
          value={content}
          onChange={handleChange}
        />
        <Form.Group className="mb-3" controlId="writer">
          <Form.Label>작성자</Form.Label>
          <Form.Control
            type="text"
            name="writer"
            value={writer}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="wdate">
          <Form.Label>작성일</Form.Label>
          <Form.Control
            type="text"
            name="wdate"
            value={new Date(wdate).toLocaleDateString("ko-KR", {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              // hour12: false,
            })}
            onChange={handleChange}
            readOnly
          />
        </Form.Group>
        <div className="text-center mt-5">
          <Button className="mx-2 px-3 btn-sm" onClick={handleSubmit}>
            저장
          </Button>
          <Button
            variant="secondary"
            className="px-3 btn-sm"
            onClick={handleReset}>
            취소
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default PostWrite;
