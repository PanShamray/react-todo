import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";


function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
        <TodoForm />
      </div>
    </Provider>
  );
}

export default App;
