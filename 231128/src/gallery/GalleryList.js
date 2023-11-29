import React from "react";
import GalleryItem from "./GalleryItem";
import Masonry from "react-masonry-css";
import { GalleryLiContainer, breakpointCol } from "./GalleryStyle";

const Gallerylist = ({ data }) => {
  return (
    <GalleryLiContainer>
      <Masonry
        breakpointCols={breakpointCol}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {data.map((item) => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </Masonry>
    </GalleryLiContainer>
  );
};

export default Gallerylist;
