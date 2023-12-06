import React from "react";
import { useColors } from "../../Context/ColorContext";

const Colors = () => {
  const { color, onOrange, onLightBlue, onLime } = useColors();
  return (
    <div>
      <h3 style={{ color: color }}>색상: {color}</h3>
      <button onClick={() => onOrange()}>orange</button>
      <button onClick={() => onLightBlue()}>lightblue</button>
      <button onClick={() => onLime()}>lime</button>
    </div>
  );
};

export default Colors;
