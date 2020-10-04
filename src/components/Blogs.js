import React, { Component } from "react";
import axios from "axios";

import Blog from "./Blog";

export default class Items extends Component {
  constructor(props) {
    super(props);
    //create state to hold items in an empty array
    this.state = {
      blogs: []
    };
  }

  getBlogs = () => {
    axios.get(`https://syedas-mern-blog-api.herokuapp.com/blogs`).then(res => {
      this.setState({ blogs: res.data });
    });
  };

  componentDidMount() {
    this.getBlogs();
  }

  renderBlogs = () => {
    return this.state.blogs.map(blog => {
      console.log(blog);
      return (
        <Blog
          key={blog._id}
          blog={blog}
          // updateCompleted={this.handleCompleted}
          // deleteItem={this.handleDeleteItem}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <h2>All Blog posts</h2>
        {this.state.blogs.length ? this.renderBlogs() : <p>List is loading</p>}
      </div>
    );
  }
}
