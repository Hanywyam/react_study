import React from "react";
import { MainCon } from "./NikeStyle";

const Main = ({ menuLi }) => {
  return (
    <MainCon>
      {/* <h2>Main intro</h2> */}

      {/* {menuLi.map((list) => {
        return (
          <div key={list.id}>
            <p>{list.categ}</p>
          </div>
        );
      })} */}

      {menuLi.map((list) => {
        const targetObj = menuLi.find((obj) => obj.categ === list.categ);
        return (
          <div>
            <p key={list.id}>{targetObj.categ}</p>
          </div>
        );
      })}
    </MainCon>
  );
};

export default Main;
