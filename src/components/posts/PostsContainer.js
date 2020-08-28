import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../redux";

function PostsContainer({ postData, fetchPosts }) {
  useEffect(() => {
    fetchPosts();
  }, []);
  return postData.loading ? (
    <h3>Loading</h3>
  ) : postData.error ? (
    <h3>{postData.error}</h3>
  ) : (
    <div>
      <main className="container">
        <h3>Posts List</h3>
        <div>
          <div className="row">
            <div className="col-md-12 pt-3 pb-3">
              <div className="btn btn-sm btn-primary">Add Post</div>
            </div>
          </div>
          <table className="table">
            {postData &&
              postData.posts &&
              postData.posts.map((post) => (
                <tr>
                  <td>{post.id}</td>
                  <td>{post.userId}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>{" "}
                    <button className="btn btn-sm btn-primary">Edit</button>{" "}
                    <button className="btn btn-sm btn-primary">Delete</button>
                  </td>
                </tr>
              ))}
          </table>
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    postData: state.post,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
