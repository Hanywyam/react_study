import { useEffect, useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const PostUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    content: "",
    writer: "홍길동",
    wdate: new Date().toISOString(),
  });
  const { title, content, writer, wdate } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (!title || !content) {
      alert("제목이나 내용을 입력하세요");
    } else {
      if (window.confirm("내용을 수정하시겠습니까?")) {
        await axios.post("/posts/update", { id, ...form });
        navigate(-1);
      }
    }
  };

  const getData = async () => {
    const result = await axios.get(`/posts/read/${id}`);
    setForm(result.data);
  };

  useEffect(() => {
    getData();
  }, [id]);

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
            onClick={() => getData()}>
            취소
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default PostUpdate;
