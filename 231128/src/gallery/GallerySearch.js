import { useEffect, useRef, useState } from "react";
import { ImageSearch } from "./GalleryStyle";

const GallerySearch = ({ text, onSearch }) => {
  const [inputText, setInputText] = useState(text);
  const focusRef = useRef();

  useEffect(() => {
    if (inputText) {
      setInputText("");
      focusRef.current.focus();
    }
  }, [text]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputText) return;

    onSearch(inputText);
  };

  return (
    <ImageSearch onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        ref={focusRef}
      />
      <button type="submit">검색</button>
    </ImageSearch>
  );
};

export default GallerySearch;
