import React, { Component } from "react";
import axios from "axios";

import Blog from "./Blog";
import AddBlog from "./AddBlog";

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

  handleSubmitBlog = newBlog => {
    axios
      .post(`https://syedas-mern-blog-api.herokuapp.com/blogs/addBlog`, {
        title: newBlog.title,
        description: newBlog.description,
        author: newBlog.author,
        authorId: "5f798f68c4657b07bb97268a",
        date: new Date()
      })
      .then(res => {
        const updatedBlogs = this.state.blogs.concat(res.data);
        this.setState({ blogs: updatedBlogs });
      })
      .catch(err => console.log(err));
  };

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
      <div className="allBlogComponents">
        <div className="addItem">
          <h2>New Blog post</h2>
          <AddBlog submitItem={this.handleSubmitBlog} />
        </div>
        <div className="posts">
          <h2>All Blog posts</h2>
          {this.state.blogs.length ? (
            this.renderBlogs()
          ) : (
            <p>List is loading</p>
          )}
        </div>
      </div>
    );
  }
}
