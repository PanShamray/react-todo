import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../actions/todoActions";

function TodoForm() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() === "") return;

    dispatch(addTodo(inputValue));
    setInputValue('');
  };

  return (
    <div>
      <h2>Додати нову тудушку</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange} 
        />
        <button type="submit">Додати</button>
      </form>
    </div>
  );
}

export default TodoForm;