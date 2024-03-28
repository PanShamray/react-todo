import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.inputValue.trim() === "") return;

    this.props.addTodo(this.state.inputValue);
    this.setState({ inputValue: "" });
  }

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

export default TodoForm;
