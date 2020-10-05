import React, { Component } from "react";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: ""
    };
  }

  handleAuthorAdd = e => {
    this.setState({ author: e.target.value });
  };

  handleSubmit = () => {
    this.props.submitItem(this.state);
    this.setState({
      author: ""
    });
  };

  render() {
    return (
      <div className="userList">
        <input
          id="newAuthor"
          type="text"
          value={this.state.author}
          onChange={this.handleAuthorAdd}
        />

        <button className="buttonAddUser" onClick={this.handleSubmit}>
          Add Author
        </button>
      </div>
    );
  }
}
