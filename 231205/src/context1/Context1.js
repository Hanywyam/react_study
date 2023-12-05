import ColorBox from "./ColorBox";
import SelectColor from "./SelectColor";
import { ColorProvider } from "./state/Color";

const Context1 = () => {
  return (
    <div>
      <h2>Context1</h2>

      <ColorProvider>
        <SelectColor />
        <ColorBox />
      </ColorProvider>
    </div>
  );
};

export default Context1;
