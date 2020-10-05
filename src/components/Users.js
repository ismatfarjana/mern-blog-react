import React, { Component } from "react";
import axios from "axios";

import User from "./User";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  getUsers = () => {
    axios.get(`https://syedas-mern-blog-api.herokuapp.com/users`).then(res => {
      this.setState({ users: res.data });
    });
  };

  componentDidMount() {
    this.getUsers();
  }

  renderUsers = () => {
    return this.state.users.map(user => {
      console.log(user);
      return (
        <User
          key={user._id}
          user={user}
          // updateCompleted={this.handleCompleted}
          // deleteItem={this.handleDeleteItem}
        />
      );
    });
  };

  render() {
    return (
      <div className="userList">
        <h2>Authors</h2>
        {this.state.users.length ? this.renderUsers() : <p>List is loading</p>}
      </div>
    );
  }
}
