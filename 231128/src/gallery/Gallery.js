import React, { useEffect, useState } from "react";
import GallerySearch from "./GallerySearch";
import GalleryList from "./GalleryList";
import axios from "axios";
import PreLoader from "./PreLoader";
import { Container } from "./GalleryStyle";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const APP_KEY = "40846064-823311df2bf5c347a7670fc40";
    const URL = `https://pixabay.com/api/?key=${APP_KEY}&q=${text}&image_type=photo&lang=ko`;

    const getData = async () => {
      try {
        setLoading(true); // 순서가 중요하기 때문에 먼저 나와야함
        const res = await axios.get(URL);
        // console.log("성공", res.data.hits);
        setData(res.data.hits);
      } catch (err) {
        setLoading(true);
        console.log("오류", err);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [text]);

  const onSearch = (txt) => {
    setText(txt);
    setData([]);
  };

  return (
    <Container width="600px">
      <h2>pixabay</h2>
      <GallerySearch text={text} onSearch={onSearch} />
      <hr />
      {loading ? <PreLoader /> : <GalleryList data={data} />}
    </Container>
  );
};

export default Gallery;
