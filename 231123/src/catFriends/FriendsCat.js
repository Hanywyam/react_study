import React from "react";

const FriendsCat = ({ item, onDelete }) => {
  // 구조분해 할당, 비구조할당
  const { id, name, age, image } = item;
  const psth = process.env.PUBLIC_URL;
  return (
    <li>
      <figure>
        <img src={psth + image} alt={name} />
        <figcaption>
          이름: {name} / 나이: {age}
        </figcaption>
        <button onClick={() => onDelete(id)}>삭제</button>
      </figure>
    </li>
  );
};

export default FriendsCat;
