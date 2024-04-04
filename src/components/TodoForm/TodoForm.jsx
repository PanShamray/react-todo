import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() === "") return;

    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <h2>Додати нову тудушку</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Додати</button>
      </form>
    </div>
  );
}

export default TodoForm;