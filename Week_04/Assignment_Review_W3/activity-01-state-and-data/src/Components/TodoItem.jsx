const TodoItem = ({ todo, handleCheckbox, handleDelete }) => {
  return (
    <li className="TodoItem">
      <input
        type="checkbox"
        name="completed"
        value={todo.completed}
        onChange={(e) => handleCheckbox(todo.id)}
      />
      <p> {todo.title} </p>
      <button onClick={(e) => handleDelete(todo.id)}>X</button>
    </li>
  );
};

export default TodoItem;
