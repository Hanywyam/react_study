import React from "react";
import FriendsCat from "./FriendsCat";

const FriendsList = ({ data, onDelete }) => {
  return (
    <ul>
      {data.map((item) => (
        <FriendsCat key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default FriendsList;
