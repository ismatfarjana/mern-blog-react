import React, { Component } from "react";

export default class AddBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      author: ""
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={this.state.author}
          onChange={this.handleChange}
        />
        <button className="button" onClick={this.handleSubmit}>
          Add a new todo
        </button>
      </div>
    );
  }
}
