import axios from "axios";
import { useEffect, useState } from "react";

const Async3 = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        // 응답 성공
        const res = await axios.get(URL);
        setData(res.data);
        // setLoading(false);
        // 실패 후에 성공했을 때 null값 입력
        setError(null);
      } catch (err) {
        // 응답 실패
        setError(err);
        // setLoading(false);
      }
      // try/catch 밖에 작성해서 한번만 값 입력 가능.
      setLoading(false);
    };
    // 변수로 대입해서 사용하면 언제 어디서든 다른 방식으로 활용하여 사용 용이.
    getData();
  }, []);

  if (loading) return <h2>로딩중...</h2>;
  if (error) return <h2>오류입니다.</h2>;
  if (!data || data.length === 0) return <h2>데이터가 없습니다.</h2>;

  return (
    <>
      <ol>
        {data.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Async3;
