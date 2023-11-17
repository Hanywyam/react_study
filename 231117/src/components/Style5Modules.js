// 참조 변수명 mStyle <- 사용자정의 이름
import mStyle from "../assets/style/myStyle.module.css";
import "../assets/style/style5.css";

const Style5Modules = () => {
  return (
    <ul className={mStyle.wrapper}>
      <li className="box">box1</li>
      <li className={mStyle.box}>box2</li>
      {/* css와 함께 쓸 때 */}
      <li className={`box ${mStyle.size}`}>box3</li>
      {/* 모듈로 여러 개를 쓸 때 */}
      <li className={[mStyle.box, mStyle.bg].join(" ")}>box4</li>
      <li className={`${mStyle.box} ${mStyle.bg}`}>box5</li>
      <li className="globalBox">global</li>
    </ul>
  );
};

export default Style5Modules;

/* 
파일명.module.css
  ㄴ 컴포넌트별 유지 보수를 용이하게 하기 위해 사용

  <요소 className={참조변수.클래스명} />
  <h1 className={myStyle.title} />

  리액트 스타일은 컴포넌트별로 분리해서 사용하는 것을 추천
  중복 이름 문제로 css보다는 css modules 사용
*/
