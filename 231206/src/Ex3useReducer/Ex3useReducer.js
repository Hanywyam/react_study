import { useReducer, useState } from "react";
import { v4 as uuid } from "uuid";

import Student from "./Student";

// console.log(uuid());

const initialState = {
  students: [{ id: uuid(), name: "홍길동", isChk: false }],
};

const reducer = (state, action) => {
  console.log("리듀서 실행", state, action);

  switch (action.type) {
    case "ADD":
      const name = action.payload.name;
      const addStudent = { id: uuid(), name, isChk: false };
      return { students: [...state.students, addStudent] };

    case "DELETE":
      return {
        students: state.students.filter((stu) => stu.id !== action.payload.id),
      };

    case "CHECK":
      const checkStudent = state.students.map((stu) =>
        stu.id === action.payload.id ? { ...stu, isChk: !stu.isChk } : stu
      );
      return { students: checkStudent };
    default:
      return state;
  }
};

const Ex3useReducer = () => {
  const [name, setName] = useState("");
  const [studentInfo, dispatch] = useReducer(reducer, initialState);

  const handleAddStudent = () => {
    dispatch({ type: "ADD", payload: { name } });
    setName("");
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h2>Ex3useReducer</h2>
      <h3>총 학생 수: {}</h3>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleAddStudent}>추가</button>
      <hr />
      <ol>
        {studentInfo.students.map((stu) => (
          <Student key={stu.id} stu={stu} dispatch={dispatch} />
        ))}
      </ol>
    </div>
  );
};

export default Ex3useReducer;
