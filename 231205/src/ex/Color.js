import React, { useContext } from "react";
import { ColorData } from "./state/ColorContext";

const Color = () => {
  const { color, setColor } = useContext(ColorData);

  return (
    <div>
      <h2 style={{ backgroundColor: color }}>Ex1Color : {color} </h2>
      <p>
        <button onClick>orange</button>
        <button>salmon</button>
        <button>tomato</button>
        <button>lightblue</button>
      </p>
    </div>
  );
};

export default Color;
