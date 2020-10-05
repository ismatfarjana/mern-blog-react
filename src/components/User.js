import React, { Component } from "react";

export default class User extends Component {
  render() {
    return (
      <div className="user">
        <p>{this.props.user.author}</p>
      </div>
    );
  }
}
