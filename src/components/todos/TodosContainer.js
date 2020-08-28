import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../../redux";

function TodosContainer({ todoData, fetchTodos }) {
  useEffect(() => {
    fetchTodos();
  }, []);
  return todoData.loading ? (
    <h3>Loading</h3>
  ) : todoData.error ? (
    <h3>{todoData.error}</h3>
  ) : (
    <div>
      <main className="container">
        <h3>Todos List</h3>
        <div>
          <div className="row">
            <div className="col-md-12 pt-3 pb-3">
              <div className="btn btn-sm btn-primary">Add Todo</div>
            </div>
          </div>
          <table className="table">
            {todoData &&
              todoData.todos &&
              todoData.todos.map((todo) => (
                <tr>
                  <td>{todo.id}</td>
                  <td>{todo.userId}</td>
                  <td>{todo.title}</td>
                  <td>{todo.completed ? "Completed" : "Pending"}</td>
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
    todoData: state.todo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodos: () => dispatch(fetchTodos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
