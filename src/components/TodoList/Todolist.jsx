import React, {Component} from "react";

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

export default TodoList;