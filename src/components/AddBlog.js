import React, { Component } from "react";

export default class AddBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      author: "",
      authoiId: ""
    };
  }

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };
  handleDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };
  handleAuthorChange = e => {
    this.setState({ author: e.target.value });
  };
  handleAuthorIdChange = e => {
    this.setState({ authorId: e.target.value });
  };

  handleSubmit = () => {
    this.props.submitItem(this.state);
    this.setState({
      title: "",
      description: "",
      author: "",
      authoiId: ""
    });
  };

  render() {
    return (
      <div className="addNewPost">
        <div className="addPostParts">
          <div className="addPostPartsPart">
            <label>Title</label>
            <input
              type="text"
              value={this.state.title}
              name="Title"
              onChange={this.handleTitleChange}
            />
          </div>

          <div className="addPostPartsPart">
            <label>Author</label>
            <input
              type="text"
              value={this.state.author}
              onChange={this.handleAuthorChange}
            />
          </div>
        </div>

        <br />

        <label>Write post here</label>
        <textarea
          type="text"
          value={this.state.description}
          rows="3"
          onChange={this.handleDescriptionChange}
        />

        <br />

        <button className="button" onClick={this.handleSubmit}>
          Publish Post
        </button>
      </div>
    );
  }
}
