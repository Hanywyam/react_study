import React from "react";

const Step1 = ({ changeInput, data, onNext }) => {
  // 비동기 함수
  const { userName, userAge, userAddr, userTel } = data;

  return (
    <>
      <p>
        <label htmlFor="userName">이름:</label>
        <input
          type="text"
          name="userName"
          id="userName"
          // 부모 컴포넌트에서 받은 props
          value={userName}
          onChange={changeInput}
        />
      </p>
      <p>
        <label htmlFor="userAge">나이:</label>
        <input
          type="text"
          name="userAge"
          id="userAge"
          value={userAge}
          onChange={changeInput}
        />
      </p>
      <p>
        <label htmlFor="userAddr">주소:</label>
        <input
          type="text"
          name="userAddr"
          id="userAddr"
          value={userAddr}
          onChange={changeInput}
        />
      </p>
      <p>
        <label htmlFor="userTel">연락처:</label>
        <input
          type="text"
          name="userTel"
          id="userTel"
          value={userTel}
          onChange={changeInput}
        />
      </p>
      <p>
        <button onClick={onNext}>다음</button>
      </p>
    </>
  );
};

export default Step1;
