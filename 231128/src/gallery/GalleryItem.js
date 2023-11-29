import React from "react";

const GalleryItem = ({ item }) => {
  const { user, tags, previewURL, views, type } = item;
  return (
    <div>
      <h2>#{tags}</h2>
      <img src={previewURL} alt={user} />
      <ul>
        <li>태그: {user} </li>
        <li>뷰어: {views} </li>
        <li>종류: {type} </li>
      </ul>
    </div>
  );
};

export default GalleryItem;
