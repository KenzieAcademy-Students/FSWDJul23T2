import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToDoList } from './pages'

import { toDoItems } from "./toDoItems"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Switch>
      <Route path="/">
        <ToDoList toDoItems={toDoItems}/>
      </Route>
    </Switch>
  )
}

export default App;
