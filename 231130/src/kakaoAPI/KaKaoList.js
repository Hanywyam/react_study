import { useEffect, useState } from "react";
import axios from "axios";

const KaKaoList = ({ category }) => {
  const [loading, setLoading] = useState(false);
  const [newArticle, setNewArticle] = useState([]);

  useEffect(() => {
    const newData = async () => {
      try {
        const URL = "https://dapi.kakao.com/v3/search/book";
        const query = category === "베르" ? "" : "?query=" + category;
        const APIKEY = "890138c5e578ddaa1fbec68ba85e3622";
        const res = await axios.get(URL + query, {
          headers: {
            Authorization: `KakaoAK ${APIKEY}`,
          },
        });
        console.log(res.data.documents);
        setNewArticle(res.data.documents);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    newData();
  }, [category]);

  if (loading) <h2>Loading...</h2>;

  return (
    <ul>
      {newArticle.map((item, idx) => (
        <li key={idx}>
          {" "}
          <strong>{item.authors}</strong> {item.title}
        </li>
      ))}
    </ul>
  );
};

export default KaKaoList;
