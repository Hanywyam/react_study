import React from "react";

const BookItem = ({ book }) => {
  const { title } = book;
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};

export default BookItem;
