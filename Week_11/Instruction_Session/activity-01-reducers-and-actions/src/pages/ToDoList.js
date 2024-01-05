import React, { useReducer, useState } from "react";
import { ToDoItem, CompletedItem, AddItem } from "../components";
import { Container, Button } from "react-bootstrap";

function reducer(state, action) {
  switch (action.type) {
    case "edit":
      state.toDoItems[action.index].inEdit = true;
      return { ...state };
    case "save":
      state.toDoItems[action.index].inEdit = false;
      state.toDoItems[action.index].task = action.task;
      return { ...state };
    case "complete":
      /**
       * change the todo item at the action.index
       * so that completed = true
       */
      return { ...state };
    default:
      throw new Error();
  }
}

export default function ContactList(props) {
  const [seeCompleted, setSeeCompleted] = useState(false);

  const initialState = { toDoItems: props.toDoItems, inEdit: false };
  const [state, dispatch] = useReducer(reducer, initialState);

  /** 
    function editTask
    parameter: index - index of toDo item in array

    dispatch type: 'edit'
  */
  const editTask = (index) => {
    dispatch({ type: "edit", index });
  };

  /** 
    function saveTask
    parameter: index - index of toDo item in array
    parameter: task - text of toDo item task

    dispatch type: 'save'
  */
  const saveTask = (index, task) => {
    dispatch({ type: "save", index, task });
  };

  /** 
    function completeTask
    parameter: index - index of toDo item in array

    dispatch type: 'complete'
  */
  const completeTask = (index) => {
    dispatch();
  };

  /** 
    function deleteTask
    parameter: index - index of toDo item in array

    dispatch type: 'delete'
  */
  const deleteTask = (index) => {
    dispatch();
  };

  /** 
    function addTask

    dispatch type: 'add'
  */
  const addTask = () => {
    dispatch();
  };

  /** 
    function reOrderTask
    parameter: index - index of toDo item in array
    parameter: direction - either 'increment' or 'decrement' signifies which direction to move a task

    dispatch type: 'add'
  */
  const reOrderTask = (index, direction) => {
    dispatch();
  };

  /** 
    function completeTask
    parameter: index - index of toDo item in array

    dispatch type: 'complete'
  */
  const deCompleteTask = (index) => {
    dispatch();
  };

  const list = state.toDoItems.map((v, i) => {
    if (!v.completed) {
      return (
        <ToDoItem
          key={i}
          index={i}
          toDoItem={v}
          handlers={{
            editTask,
            saveTask,
            completeTask,
            deleteTask,
            reOrderTask,
          }}
        />
      );
    }
  });
  const completedList = state.toDoItems.map((v, i) => {
    if (v.completed) {
      return (
        <CompletedItem
          key={i}
          index={i}
          task={v.task}
          deCompleteTask={deCompleteTask}
        />
      );
    }
  });
  return (
    <>
      <Container className="justify-content-lg-center ContactContainer">
        <Button
          variant="primary"
          onClick={() => setSeeCompleted(!seeCompleted)}
        >
          {seeCompleted ? "See Incomplete Tasks" : "See Completed Tasks"}
        </Button>
        {seeCompleted ? completedList : list}
        <AddItem addTask={addTask} />
      </Container>
    </>
  );
}
