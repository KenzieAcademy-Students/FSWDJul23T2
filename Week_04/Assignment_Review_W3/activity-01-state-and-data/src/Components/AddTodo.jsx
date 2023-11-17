import { useState } from "react";

const initialState = {
  title: "",
};

const AddTodo = ({ handleAdd }) => {
  const [newTodo, setNewTodo] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    handleAdd(newTodo.title);
    setNewTodo(initialState);
  };

  const handleInput = (e) => {
    setNewTodo({ title: e.target.value });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="add">
        Add a Todo:
        <input
          id="add"
          name="add"
          type="text"
          placeholder="Add a task ..."
          value={newTodo.title}
          onChange={(e) => handleInput(e)}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
