import { useState } from "react";
import Student from "./Student";

const Ex3useReducer = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
    setName("");
  };

  return (
    <div>
      <h2>Ex3 useReducer</h2>
      <h3>총 학생 수: {}</h3>
      <input type="text" value={name} onChange={handleChange} />
      <button>추가</button>
      <hr />
      {/* map 돌려서 리스트 출력 */}
      <Student />
    </div>
  );
};

export default Ex3useReducer;
