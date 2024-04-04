import React, { useState } from "react";
import "./App.css";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      isDone: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      );

      if (updatedTodos.find((todo) => todo.id === id).isDone) {
        let newIndex = 0;
        while (
          newIndex < updatedTodos.length &&
          updatedTodos[newIndex].isDone
        ) {
          newIndex++;
        }
        const toggledTodo = updatedTodos.splice(
          updatedTodos.findIndex((todo) => todo.id === id),
          1
        )[0];
        updatedTodos.splice(newIndex, 0, toggledTodo);
      } else {
        updatedTodos.push(
          updatedTodos.splice(
            updatedTodos.findIndex((todo) => todo.id === id),
            1
          )[0]
        );
      }

      return updatedTodos;
    });
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <TodoForm addTodo={addTodo} />
    </>
  );
}

export default App;
