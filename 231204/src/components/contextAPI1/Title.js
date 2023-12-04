import React from "react";

const Title = ({ lang }) => {
  return <div>{lang === "en" ? <h2>{lang}</h2> : <h2>{lang}</h2>}</div>;
};

export default Title;
