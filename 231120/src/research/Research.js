import React, { useState } from "react";
import Research3 from "./Research3";

const Research = () => {
  const [txt, setTxt] = useState("");

  const valueTxt = (evt) => {
    const { value } = evt.target;
    setTxt(value);
  };

  return (
    <div>
      <form>
        <p>
          이름:{" "}
          <input type="text" name="userName" value={txt} onChange={valueTxt} />
        </p>
        <p>
          나이: <input type="text" name="userYears" />
        </p>
        <p>
          주소: <input type="text" name="userAdress" />
        </p>
        <p>
          연락처: <input type="text" name="userNumbers" />
        </p>
        <button>이전</button>
        <button>다음</button>
      </form>
    </div>
  );
};

export default Research;
