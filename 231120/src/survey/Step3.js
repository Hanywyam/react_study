import React from "react";

const Step3 = ({ data, onPrev, onNext }) => {
  const {
    userName,
    userAge,
    userAddr,
    userTel,
    userJob,
    userEmail,
    userGender,
    userInter,
  } = data;
  return (
    <>
      <ul>
        <li>이름: {userName}</li>
        <li>나이: {userAge}</li>
        <li>주소: {userAddr}</li>
        <li>연락처: {userTel}</li>
        <li>직업: {userJob}</li>
        <li>이메일: {userEmail}</li>
        <li>성별: {userGender}</li>
        <li>관심분야: {userInter}</li>
      </ul>

      <p>
        <button onClick={onPrev}>이전</button>
        <button onClick={onNext}>다음</button>
      </p>
    </>
  );
};

export default Step3;
