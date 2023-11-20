import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Final from "./Final";
import surveyStyle from "./survey.module.css";
import { useState } from "react";

const Main = () => {
  // const [userName, setUserName] = useState();
  // const [userAge, setUserAge] = useState();
  // const [userAddr, setUserAddr] = useState();
  // 이렇게 하면 useState가 너무 많죠.

  const [data, setData] = useState({
    userName: "",
    userAge: "",
    userAddr: "",
    userTel: "",
    userJob: "",
    userEmail: "",
    userGender: "",
    userInter: "",
  });

  // step의 값에 따라 컴포넌트가 보여지게 한다.
  const [step, setStep] = useState(1);

  const changeInput = (evt) => {
    const { value, name } = evt.target;
    // 내가 클릭한 input의 name이 가진 value의 값을 가져와 data에게 반환.
    // 하나의 함수로 모든 input의 value값을 가져올 수 있게 됨.
    setData({
      ...data,
      [name]: value,
    });
  };

  // 페이지 이전
  const onPrev = () => {
    setStep(step - 1);
  };
  // 페이지 다음
  const onNext = () => {
    setStep(step + 1);
  };

  return (
    <div className={surveyStyle.Wrapper}>
      {step === 1 && (
        <Step1 changeInput={changeInput} data={data} onNext={onNext} />
      )}
      {step === 2 && (
        <Step2
          changeInput={changeInput}
          data={data}
          onPrev={onPrev}
          onNext={onNext}
        />
      )}
      {step === 3 && (
        <Step3 data={data} onPrev={onPrev} onNext={onNext} {...data} />
      )}
      {step === 4 && <Final data={data} />}
    </div>
  );
};

export default Main;
