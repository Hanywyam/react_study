import { useSelector } from "react-redux";
import ColorListItem from "./ColorListItem";

const ColorList = () => {
  const { list } = useSelector((state) => state.colorPrint);
  return (
    <div>
      {list.map((item) => (
        <ColorListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ColorList;