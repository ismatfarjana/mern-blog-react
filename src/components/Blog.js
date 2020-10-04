import React, { Component } from "react";

export default class Blog extends Component {
  render() {
    return (
      <div className="oneBlog">
        <h2>{this.props.blog.title}</h2>
        <h3>{this.props.blog.author}</h3>
        <p>{this.props.blog.description}</p>
        <p>{this.props.blog.date}</p>
      </div>
    );
  }
}
