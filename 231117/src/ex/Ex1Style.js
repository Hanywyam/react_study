import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => (props.size ? props.size : "50%")};
  background-color: beige;
  margin: 10px auto;
  padding: 10px 30px 50px;
  border: 1px solid #888;
  border-radius: 15px;
`;
const Title = styled.h2`
  background-color: #fff;
  padding: 5px 10px 10px;
  border-radius: 10px;
  border: 1px solid #888;
`;
const Btn = styled.button`
  width: 60px;
  height: 30px;
  border-radius: 10px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  &.plus::after {
    content: "➕";
  }
  &.minus::after {
    content: "➖";
  }
  &.disable {
    background-color: red;
    filter: grayscale(50%);
  }
`;

const Ex1Style = () => {
  const [count, setCount] = useState(0);
  /* 
  // 버튼을 누르면 count 증가 / 감소
const increment = () => {
setCount(count + 1);
};
  // const decrement = () => {
  //   setCount(count - 1);
  // };
 */
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);

  const increment = () => {
    // setCount(count >= max ? max : count + 1);
    setCount((num) => (num >= max ? max : num + 1));
  };

  const decrement = () => {
    // setCount(count -1)
    // setCount(count <= min ? min : count - 1);
    setCount((num) => (num === min ? min : num - 1));
  };

  return (
    <Container size="200px">
      {/* 0이하, 10이상으로 커지면 버튼 비활성화.
      상태 변화니까 useState()      */}
      <Title>count : {count}</Title>
      {/* 이 버튼을 클릭하면 1씩 증가 👍 */}
      <Btn className="plus" onClick={increment} disabled={count === max} />
      {/* 이 버튼을 클릭하면 1씩 감소 👎 */}
      <Btn className="minus" onClick={decrement} disabled={count === min} />
    </Container>
  );
};

export default Ex1Style;
