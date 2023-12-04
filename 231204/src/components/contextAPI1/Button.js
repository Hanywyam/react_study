import React from "react";

const Button = ({ lang, handleToggle }) => {
  return (
    <div>
      <button onClick={handleToggle}>{lang}</button>
    </div>
  );
};

export default Button;
