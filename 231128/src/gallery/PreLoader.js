import React from "react";
import myPre from "./PreLoader.module.css";

const PreLoader = () => {
  return (
    <div style={{ height: "100vh" }}>
      <h2 className={myPre.loaderTitle}>loading ...</h2>
      <div className={myPre.preload}></div>
      <div className={myPre.preload}></div>
    </div>
  );
};

export default PreLoader;
