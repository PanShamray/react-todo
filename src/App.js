import React, { Component } from "react";
import "./App.css";

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

class TodoList extends Component {
  render() {
    const { todos, toggleTodo } = this.props;
    console.log(todos);
    return (
      <div>
        <h2>Тудушка</h2>
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              style={{ backgroundColor: todo.isDone ? "green" : "red" }}
              onClick={() => toggleTodo(index)}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class TodoForm extends Component {
  state = {
    inputValue: "",
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.inputValue.trim() === "") return;

    this.props.addTodo(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <div>
        <h2>Додати нову тудушку</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button type="submit">Додати</button>
        </form>
      </div>
    );
  }
}

export default App;
