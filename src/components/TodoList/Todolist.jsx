import React from "react";

function TodoList({ todos, toggleTodo }) {
  return (
    <div>
      <h2>Тудушка</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ backgroundColor: todo.isDone ? "green" : "red" }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;