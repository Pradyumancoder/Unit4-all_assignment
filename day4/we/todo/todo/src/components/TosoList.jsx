import TodoItem from "../components/TodoItem";

function TodoList({ Todos }) {
  return (
    <div>
      {Todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </div>
  );
}
export default TodoList;
