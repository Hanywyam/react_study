import { useCallback, useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Postwrite = () => {
  const navigate = useNavigate();
  // wdate
  // const currentDate = new Date().toLocaleString();
  // const currentDate = new Date().toLocaleDateString(); //yyyy.mm.dd
  // 문자열 date.
  // server쪽에서 Date 타입을 설정했기 때문에 .toISOString() 사용. ex) 2023-12-20T01:48:07.806+00:00 <-뒤에 값까지 나와서 정렬할 때 편함
  const currentDate = new Date().toISOString(); // yyyy-mm-dd

  // 데이터 상태값
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    title: "",
    content: "",
    writer: "홍길동",
    wdate: currentDate,
  });
  // 구조 분해
  const { title, content, writer, wdate } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // 버튼 설정
  const handleSubmit = useCallback(async () => {
    if (!title || !content) {
      alert("제목과 내용을 입력하세요.");
    } else {
      const reCheck = window.confirm("내용을 저장하시겠습니까?");
      if (reCheck) {
        await axios.post("/posts/write", form);
        navigate("/posts");
      }
    }
  }, [form, navigate]);

  const handleReset = () => {
    setForm({
      ...form,
      title: "",
      content: "",
      writer: "홍길동",
      wdate: currentDate,
      // 작성한 내용 초기화
    });
  };

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
            value={
              // 시스템 date가 아닌 일반적인 date로 보여지게 설정
              new Date(wdate).toLocaleDateString("ko-KR", {
                hour: "numeric",
                minute: "numeric",
                // second: "numeric",
                // hour12: false,
              })
            }
            onChange={handleChange}
            readOnly // 날짜 수정 안됨.
          />
        </Form.Group>
        <div className="text-center mt-5">
          <Button className="mx-2 px-3 btn-sm" onClick={handleSubmit}>
            저장
          </Button>
          <Button
            className="px-3 btn-sm"
            variant="secondary"
            onClick={handleReset}>
            취소
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Postwrite;
