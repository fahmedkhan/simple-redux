import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "" };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
    };
    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h2>Add Post</h2>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Title: </label>
                <br />
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Body: </label>
                <br />
                <textarea
                  row="5"
                  type="text"
                  name="body"
                  className="form-control"
                  value={this.state.body}
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <button type="submit" className="btn btn-md btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Postform.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(Postform);
