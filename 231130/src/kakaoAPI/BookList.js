import { useEffect, useState, useCallback } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import BookItem from "./BookItem";
import axios from "axios";
import qs from "qs";

const BookList = () => {
  const { title } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState([]);
  const [err, setErr] = useState(null);

  // 리액트라우터. 경로값.
  const location = useLocation();
  // 쿼리 문자열을 파싱하는 라이브러리. 객체로 변환.
  // location.search -> ?page=1
  const search = qs.parse(location.search, { ignoreQueryPrefix: true });
  // 순서 중요! 1이 먼저있으면 1만 들어감.
  const page = parseInt(search.page) || 1;

  // 같이 쓰고 싶을 때는 useEffect 안에서 작업.
  // 나눠서 쓰고싶을 때는 useCallback
  const kakaoData = useCallback(async () => {
    try {
      setLoading(true);
      const API_KEY = "24351b63ff85b01997cab9dd498313cc";
      const URL = `https://dapi.kakao.com/v3/search/book?target=title&size=3&query=${title}&page=${page}&sort=recency`;

      //http 요청에 포함되는 내용
      const headers = {
        Authorization: `KakaoAK ${API_KEY}`,
      };

      const res = await axios.get(URL, { headers });
      // console.log(res.data.documents);

      const documents = res.data.documents;
      setBook(page === 1 ? documents : book.concat(documents));
      // setBook((prevBook) =>
      //   page === 1 ? documents : [...prevBook, ...documents]
      // );
    } catch (err) {
      console.log("오류", err);
      setErr(err);
    } finally {
      setLoading(false);
    }
  }, [title, page]);

  useEffect(() => {
    kakaoData();
  }, [kakaoData]);

  if (err) {
    <h2>오류입니다{err}</h2>;
  } else if (loading) {
    return <h2>데이터를 불러오는 중입니다..</h2>;
  }

  return (
    <div>
      <h2>리스트</h2>
      {book.map((book) => (
        <BookItem book={book} key={book.url} />
      ))}

      <Link to={`/book/${title}?page=${page + 1}`}>더보기</Link>
    </div>
  );
};

export default BookList;
