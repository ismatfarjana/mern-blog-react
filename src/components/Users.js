import React, { Component } from "react";
import axios from "axios";

import User from "./User";
import AddUser from "./AddUser";

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

  handleSubmitUser = newUser => {
    axios
      .post(`https://syedas-mern-blog-api.herokuapp.com/users/addUser`, {
        author: newUser.author
      })
      .then(res => {
        const updatedUsers = this.state.users.concat(res.data);
        this.setState({ users: updatedUsers });
      })
      .catch(err => console.log(err));
  };

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
      <div className="allBlogComponents">
        <div className="posts">
          <h2>Be an Author</h2>
          <AddUser submitItem={this.handleSubmitUser} />
          <h2>Authors</h2>
          {this.state.users.length ? (
            this.renderUsers()
          ) : (
            <p>List is loading</p>
          )}
        </div>
      </div>
    );
  }
}
