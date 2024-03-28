import React, { Component } from "react";
import "./App.css";

import TodoList from "./components/TodoList/Todolist";
import TodoForm from "./components/TodoForm/TodoForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  addTodo = (text) => {
    const newTodo = {
      text: text,
      isDone: false,
    };

    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  };

  toggleTodo = (index) => {
    this.setState((prevState) => {
      const updatedTodos = [...prevState.todos];
      updatedTodos[index] = {
        ...updatedTodos[index],
        isDone: !updatedTodos[index].isDone,
      };

      if (updatedTodos[index].isDone) {
        let newIndex = 0;
        while (
          newIndex < updatedTodos.length &&
          updatedTodos[newIndex].isDone
        ) {
          newIndex++;
        }
        const toggledTodo = updatedTodos.splice(index, 1)[0];
        updatedTodos.splice(newIndex, 0, toggledTodo);
      } else {
        updatedTodos.push(updatedTodos.splice(index, 1)[0]);
      }

      return { todos: updatedTodos };
    });
  };

  render() {
    return (
      <>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
        <TodoForm addTodo={this.addTodo} />
      </>
    );
  }
}

export default App;