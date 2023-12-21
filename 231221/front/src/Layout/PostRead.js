import { useState, useMemo, useEffect } from "react";
import { Card, Container, Button } from "react-bootstrap";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";

const PostRead = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    id: id,
    title: "",
    content: "",
    writer: "",
    wdate: "",
  });
  const { title, content, writer, wdate } = form;

  const getData = async () => {
    try {
      setLoading(true);
      const result = await axios.get(`/posts/read/${id}`);
      setForm({ ...result.data });
    } catch (error) {
      console.log("읽기 오류: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  const onBack = () => {
    navigate(-1);
  };

  const onDelete = async () => {
    const reCheck = window.confirm(`${title} 글을 삭제하시겠습니까?`);

    if (reCheck) {
      try {
        await axios.post(`/posts/delete/${id}`);
        navigate("/posts");
      } catch (error) {
        console.log("데이터 삭제 중 오류: ", error);
      }
    }
  };

  const newDate = useMemo(() => {
    return new Date(wdate).toLocaleDateString("ko-KR", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  }, [wdate]);

  return loading ? (
    <h2 className="my-5 text-center">로딩중입니다...</h2>
  ) : (
    <Container className="mt-3">
      <h2 className="text-center">내용 읽기</h2>
      <Button className="btn-sm" onClick={onBack}>
        뒤로 가기
      </Button>
      <Link to={`/posts/update/${id}`}>
        <Button className="btn-sm mx-2">수정</Button>
      </Link>
      <Button className="btn-sm" onClick={onDelete} variant="danger">
        삭제
      </Button>
      <Card className="mt-3">
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Text>{content}</Card.Text>
        </Card.Body>
        <Card.Footer>
          {newDate} by {writer}
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default PostRead;
