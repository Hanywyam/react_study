import { useState } from "react";
import { Table, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  const getData = async () => {
    try {
      setLoading(true);

      // 데이터 불러오기
      setPosts();

      // 데이터 수 기반으로 전체 페이지 계산(페이지 나누기)
      setTotalPages();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-3">
      <h2 className="text-center">게시판 리스트</h2>
      <div className="text-end md-3 mt-3">
        <Link to="/posts/write">
          <Button>글쓰기</Button>
        </Link>
      </div>

      {loading ? (
        <h2 className="my-5 text-center">로딩 중 입니다...</h2>
      ) : (
        // react-bootstrap: table example 가져옴
        <Table responsive>
          <thead>
            <tr>
              <th>No.</th>
              <th>제목</th>
              <th>내용</th>
              <th>작성자</th>
              <th>날짜</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.no}</td>
                <td>{post.title}</td>
                <td>{post.content}</td>
                <td>{post.writer}</td>
                <td>{post.wdate}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <div className="text-center">
        <Button variant="secondary">이전</Button>
        <span className="mx-2">
          {} / {totalPages}
        </span>
        <Button variant="secondary">다음</Button>
      </div>
    </Container>
  );
};

export default PostList;
