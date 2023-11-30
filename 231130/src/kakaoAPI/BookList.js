import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookList = () => {
  const { title } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState([]);

  // 같이 쓰고 싶을 때는 useEffect 안에서 작업.
  // 나눠서 쓰고싶을 때는 useCallback
  const kakaoData = useCallback(async () => {
    try {
      setLoading(true);
      const URL = `https://dapi.kakao.com/v3/search/book?target=title&query=${title}&page=`;
      const APPKEY = "&apiKey=d0e87ff2418249e0b41a830bf6a1efe3";
      const header = {
        Authorization: `KakaoAK ${APPKEY}`,
      };
    } catch (err) {
      console.log("오류", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    kakaoData();
  }, []);

  return (
    <div>
      <h2>리스트</h2>
    </div>
  );
};

export default BookList;
