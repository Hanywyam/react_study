import React, { useMemo } from "react";
import Categories from "./Categories";
import NewsList from "./NewsList";
import { useParams } from "react-router-dom";

const NewsPage = () => {
  const { category } = useParams();

  const mCategory = useMemo(() => category || "all", [category]);

  return (
    <div>
      <Categories />
      <NewsList category={mCategory} />
    </div>
  );
};

export default NewsPage;
