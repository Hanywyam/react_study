import { useState } from "react";
import Color from "./Color";
import { ColorData } from "./state/ColorContext";

const Ex1Color = () => {
  const [color, setColor] = useState(false);

  return (
    <>
      <ColorData.Provider value={{ color, setColor }}>
        <Color />
      </ColorData.Provider>
    </>
  );
};

export default Ex1Color;
