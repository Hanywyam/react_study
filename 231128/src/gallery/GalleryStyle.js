import styled from "styled-components";

// export를 이용하여
// 하나의 문서 안에서 여러개의 스타일 값을 내보낼 수 있음.

// Gallery.js
export const Container = styled.div`
  width: ${(props) => props.width};
  margin: 20px auto;
`;

// GallerySearch.js
export const ImageSearch = styled.form`
  text-align: center;

  input[type="text"] {
    outline: none;
    padding: 2px 10px;
    width: 300px;
    height: 30px;
    box-sizing: border-box;
    font-size: 18px;
  }

  button[type="submit"] {
    width: 80px;
    height: 30px;
    font-size: 16px;
    background-color: #000;
    color: #fff;
    border: none;
    vertical-align: top;
    &:hover {
      background-color: orange;
    }
  }
`;
// GalleryList.js
export const GalleryLiContainer = styled.div`
  .my-masonry-grid {
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 20px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: #eee;
    margin-bottom: 30px;
    padding: 20px;
    box-sizing: border-box;
  }
`;
// breakpointCol
export const breakpointCol = {
  default: 5,
  1400: 4,
  960: 3,
  500: 2,
};

// GalleryItem.js
export const GalleryItemBox = styled.section``;
