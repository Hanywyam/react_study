import React from "react";
import Ex4Sub from "./Ex4Sub";

const Ex4 = () => {
  return (
    <div className="BorderTop">
      <h2>Ex4 - defaultProps</h2>
      <Ex4Sub />
      <Ex4Sub
        name="아메리카노"
        type="아이스"
        price="4500"
        size="tall"
        color="tomato"
        bgcolor="orange"
        done={true}
      />
      <Ex4Sub name="라떼" price="5000" color="lightblue" done={false} />
    </div>
  );
};

export default Ex4;
