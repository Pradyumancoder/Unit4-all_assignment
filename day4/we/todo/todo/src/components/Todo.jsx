import { useState } from "react";
import TodoList from "../components/TosoList";
// import TodoItem from "./TodoItem";

export const Todo = () => {
  const [Text, setText] = useState("");
  const [Todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClear = () => {
    setText("");
  };
  const handleClick = () => {
    setTodos([...Todos, Text]);
    handleClear();
  };

  return (
    <div>
      <input
        className="inputtag"
        value={Text}
        onChange={handleChange}
        placeholder="Write something"
      />
      <button onClick={handleClick} className="plus">
        +
      </button>
      <TodoList Todos={Todos} />
      {/* <TodoItem Todo={Todos}/> */}
    </div>
  );
};
