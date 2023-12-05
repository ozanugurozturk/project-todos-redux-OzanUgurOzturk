import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { tasks } from "./reducers/tasks";
import TodoApp from "./components/ToDoApp";
import "./App.css"; // Import your styling

const reducer = combineReducers({
  tasks: tasks.reducer,
});

const store = configureStore({ reducer });

const App = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

export default App;