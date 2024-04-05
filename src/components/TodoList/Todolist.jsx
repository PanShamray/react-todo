import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../../actions/todoActions";

function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Тудушка</h2>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{ backgroundColor: todo.isDone ? "green" : "red" }}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;