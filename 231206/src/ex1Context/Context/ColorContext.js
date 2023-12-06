// ColorContext.js
import { createContext, useContext, useState, useMemo } from "react";

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("#444");

  const onOrange = () => setColor("orange");
  const onLightBlue = () => setColor("lightblue");
  const onLime = () => setColor("lime");

  const value = useMemo(
    () => ({
      color,
      onOrange,
      onLightBlue,
      onLime,
    }),
    [color, onOrange, onLightBlue, onLime]
  );

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

export default ColorProvider;
