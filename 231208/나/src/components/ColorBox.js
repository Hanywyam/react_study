import React from "react";
import ColorItem from "./ColorItem";
import { useSelector } from "react-redux";

const ColorBox = () => {
  const { colors } = useSelector((state) => state.counter);

  return (
    <div style={{ display: "flex" }}>
      {colors.map((color) => (
        <ColorItem key={color} color={color} />
      ))}
    </div>
  );
};

export default ColorBox;
