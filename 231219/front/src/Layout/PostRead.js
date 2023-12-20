import { useCallback, useEffect, useMemo, useState } from "react";
import { Container, Button, Card } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
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
  // form 구조분해
  const { title, content, writer, wdate } = form;

  const getData = async () => {
    setLoading(true);
    try {
      setLoading(true);
      const result = await axios.get(`/posts/read/${id}`);
      setForm({ ...result.data });
    } catch (err) {
      console.log("읽기 오류: ", err);
    } finally {
      setLoading(false);
    }
  };
  // id 값이 변할 때마다 data 호출하기
  useEffect(() => {
    getData();
  }, [id]);

  // 뒤로가기 버튼
  const onBack = () => {
    navigate(-1);
  };
  // 삭제 버튼
  const onDel = async () => {
    const reCheck = window.confirm(`${title} 정말 삭제하시겠습니까?`);
    // 지울건지 사용자에게 확인 후 삭제 할 수 있게 조건문 설정
    if (reCheck) {
      try {
        await axios.post(`/posts/delete/${id}`);
        navigate("/posts");
      } catch (err) {
        console.log("데이터 삭제 중 오류: ", err);
      }
    }
  };

  // newDate 변수 설정 : 수정 시 날짜 값 변경
  const newDate = useMemo(() => {
    return new Date(wdate).toLocaleDateString("ko-KR", {
      hour: "numeric",
      minute: "numeric",
      // second: "numeric",
      // hour12: false,
    });
  }, [wdate]);

  return loading ? (
    <h2 className="mt-5 text-center">로딩 중 입니다...</h2>
  ) : (
    <Container className="mt-3">
      <h2 className="text-center">내용 읽기</h2>

      <Button className="btn-sm" onClick={onBack}>
        뒤로 가기
      </Button>
      <Link to={`/posts/update/${id}`}>
        <Button className="btn-sm mx-2" onClick>
          수정
        </Button>
      </Link>
      <Button className="btn-sm" onClick={onDel} variant="danger">
        삭제
      </Button>

      {/* react-bootstrap > component > cards 에서 가져옴 */}
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
