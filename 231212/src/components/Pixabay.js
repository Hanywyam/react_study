import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPixabay } from "../store/slice/pixabaySlice";
// [Pixabay API](https://pixabay.com/api/docs/)

const Pixabay = () => {
  const dispatch = useDispatch();
  const pics = useSelector((state) => state.pixabay.data);

  useEffect(() => {
    dispatch(getPixabay());
  }, []);

  return (
    <ul style={{ display: "flex", flexFlow: "wrap", listStyle: "none" }}>
      {pics.map((item) => (
        <li key={item.id}>
          <img src={item.previewURL} alt={item.tags} />
        </li>
      ))}
    </ul>
  );
};

export default Pixabay;
