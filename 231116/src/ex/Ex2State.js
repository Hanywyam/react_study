import React, { useState } from "react";

const Ex2State = () => {
  const [color, setColor] = useState("#444");
  const [toggleColor, setToggleColor] = useState(false);

  const styleSet = {
    margin: 10,
    width: 100,
    height: 100,
    border: "1px solid #000",
    backgroundColor: color,
  };

  const toggle = () => {
    setColor(!toggleColor);
    if (toggleColor) {
      onColor1();
    } else {
      onColor2();
    }
  };

  const onColor1 = () => setColor("tomato");
  const onColor2 = () => setColor("orange");

  return (
    <section className="borderTop">
      <h2>Ex2 - state</h2>
      <p>박스를 클릭할 때마다 색상1, 색상2 번갈아 나옴(토글)</p>
      <div onClick={toggle} style={styleSet}>
        box color:{setToggleColor}
      </div>
    </section>
  );
};

export default Ex2State;

/* 
import React, { useState } from "react";

const Ex2State = () => {
  const [bgcolor, setBgcolor] = useState("#ddd");

  const boxStyle = {
    border: "1px solid #000",
    width: 100,
    height: 100,
    margin: 10,
    textAlign: "center",
  };

  const handleColor = () => {
    setBgcolor(bgcolor === "orange" ? "tomato" : "orange");
  };

  return (
    <section className="borderTop">
      <h2>Ex2 - state</h2>
      <p>박스를 클릭할 때마다 색상1, 색상2 번갈아 나옴(토글)</p>

      <div
        style={{...boxStyle, { backgroundColor: bgcolor }}}
        onClick={handleColor}>
        box color:{bgcolor}
      </div>
    </section>
  );
};

export default Ex2State;

*/
