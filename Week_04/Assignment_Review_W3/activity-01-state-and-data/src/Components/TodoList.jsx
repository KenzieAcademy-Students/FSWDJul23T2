import { TodoItem } from "./index";

const TodoList = ({ todos, handleCheckbox, handleDelete }) => {
  return (
    <ul className="TodoList">
      {todos &&
        todos.map((todo, index) => (
          <TodoItem
            todo={todo}
            key={index}
            handleCheckbox={handleCheckbox}
            handleDelete={handleDelete}
          />
        ))}
    </ul>
  );
};

export default TodoList;
