import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../redux";

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
          <table className="table">
            {todoData &&
              todoData.todos &&
              todoData.todos.map((todo) => (
                <tr>
                  <td>{todo.id}</td>
                  <td>{todo.userId}</td>
                  <td>{todo.title}</td>
                  <td>{todo.completed ? "Completed" : "Pending"}</td>
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
