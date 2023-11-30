import { useMemo } from "react";
import Categories from "./Categories";
import KaKaoList from "./KaKaoList";
import { useParams } from "react-router-dom";

const KakaoPage = () => {
  const { category } = useParams();

  const mCategory = useMemo(() => category || "", [category]);

  return (
    <div>
      <Categories />
      <KaKaoList category={mCategory} />
    </div>
  );
};

export default KakaoPage;
