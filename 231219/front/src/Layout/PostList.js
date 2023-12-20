import { useEffect, useState } from "react";
import { Table, Container, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const PostList = () => {
  // query setting
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const param_page = search.get("page");
  const page = param_page === null ? 1 : Number(param_page);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  const getData = async () => {
    try {
      setLoading(true);
      const result = await axios.get(`/posts?page=${page}`);
      const listNo = (page - 1) * 10 + 1;
      const postsNo = result.data.docs.map((post, index) => ({
        ...post,
        no: listNo + index,
      }));

      // 데이터 불러오기
      setPosts(postsNo);

      // 데이터 수 기반으로 전체 페이지 계산(페이지 나누기)
      setTotalPages(result.data.totalPages);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // 호출할 때 마다 작성한 write 데이터 목록 불러오기
  useEffect(() => {
    getData();
  }, [page]);

  return (
    <Container className="mt-3">
      <h2 className="text-center">게시판</h2>
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
                <td>
                  <Link to={`/posts/${post._id}`}>{post.content}</Link>
                </td>
                <td>{post.writer}</td>
                <td>
                  {new Date(post.wdate).toLocaleDateString("ko-KR", {
                    hour: "numeric",
                    minute: "numeric",
                    // second: "numeric",
                    // hour12: false,
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <div className="text-center">
        {page > 1 && (
          <Link to={`/posts?page=${page - 1}`}>
            <Button variant="secondary">이전</Button>
          </Link>
        )}

        <span className="mx-2">
          {page} / {totalPages}
        </span>
        {page < totalPages && (
          <Link to={`/posts?page=${page + 1}`}>
            <Button variant="secondary">다음</Button>
          </Link>
        )}
      </div>
    </Container>
  );
};

export default PostList;
