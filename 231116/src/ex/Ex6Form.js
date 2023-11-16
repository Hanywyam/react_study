import React, { useState } from "react";

const Ex6Form = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const dataCheck = (evt) => {
    const { value } = evt.target;
    setPw(value);
  };

  const pwData = pw.length >= 9;

  return (
    <section className="borderTop" style={{ lineHeight: 2 }}>
      <p>
        비밀번호의 수가 8자 이상이면 버튼 비활성화(disabled), <br />
        9자 이상이면 활성화
      </p>
      아이디: <input type="text" />
      <br />
      비밀번호: <input type="password" value={pw} onChange={dataCheck} />
      <br />
      <button disabled={!pwData}>로그인</button>
      <button disabled={pw.length < 9}>로그인</button>
    </section>
  );
};

export default Ex6Form;
