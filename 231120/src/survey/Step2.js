import React from "react";

const Step2 = ({
  changeInput,
  userJob,
  userEmail,
  userGender,
  userInter,
  onPrev,
  onNext,
  // 직접 받아 쓸 수도 있음.
}) => {
  return (
    <>
      <h2>Step2</h2>
      <p>
        <label htmlFor="userJob">직업:</label>
        <input
          type="text"
          name="userJob"
          id="userJob"
          value={userJob}
          onChange={changeInput}
        />
      </p>
      <p>
        <label htmlFor="userEmail">이메일:</label>
        <input
          type="email"
          name="userEmail"
          id="userEmail"
          value={userEmail}
          onChange={changeInput}
        />
      </p>
      <p>
        <label htmlFor="userGender">성별:</label>
        <input
          type="text"
          name="userGender"
          id="userGender"
          value={userGender}
          onChange={changeInput}
        />
      </p>
      <p>
        <label htmlFor="userInter">관심분야:</label>
        <input
          type="text"
          name="userInter"
          id="userInter"
          value={userInter}
          onChange={changeInput}
        />
      </p>

      <p>
        <button onClick={onPrev}>이전</button>
        <button onClick={onNext}>다음</button>
      </p>
    </>
  );
};

export default Step2;
