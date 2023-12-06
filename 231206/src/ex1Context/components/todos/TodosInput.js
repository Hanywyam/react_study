import { useTodos } from "../../Context/TodoContext";

const TodosInput = () => {
  const { text, onAdd, changeInput } = useTodos();
  const handleSubmit = (e) => {
    e.preventDefault();
    // 버튼클릭 -> 새로고침. 리액트에서는 추구하지 않는 방향. => preventDefault로 초기화

    if (!text) return;
    onAdd(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={changeInput} value={text} />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodosInput;
