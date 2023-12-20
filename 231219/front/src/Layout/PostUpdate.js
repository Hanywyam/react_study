import { useCallback, useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const PostUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: id,
    title: "",
    content: "",
    writer: "",
    wdate: new Date().toISOString(),
  });
  // form 구조분해
  const { title, content, writer, wdate } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // 저장 버튼 설정
  const handleSubmit = useCallback(async () => {});

  // 수정을 취소(수정안함)
  const getData = async () => {
    const result = await axios.get(`/posts/read/${id}`);
  };

  return (
    <Container className="mt-3">
      <h2 className="text-center">게시글 수정</h2>
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
          <Button className="px-3 btn-sm" variant="secondary" onClick={getData}>
            취소
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default PostUpdate;
