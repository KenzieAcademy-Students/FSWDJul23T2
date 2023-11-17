import { useState } from "react";
import { AddTodo, TodoList } from "./Components/index";
import todoList from "./todoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(todoList);

  const handleAddTodo = (title) => {
    const newTodo = {
      id: todos[todos.length - 1].id + 1,
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleCheckbox = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List:</h1>
      <AddTodo handleAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        handleCheckbox={handleCheckbox}
        handleDelete={handleDeleteTodo}
      />
    </div>
  );
}

export default App;
