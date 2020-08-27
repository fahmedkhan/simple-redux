import axios from "axios";
import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
} from "./todoTypes";

export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(fetchTodosRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        const todos = response.data;
        dispatch(fetchTodosSuccess(todos));
      })
      .catch((error) => {
        dispatch(fetchTodosFailure(error.message));
      });
  };
};

export const fetchTodosRequest = () => {
  return {
    type: FETCH_TODOS_REQUEST,
  };
};

export const fetchTodosSuccess = (todos) => {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: todos,
  };
};

export const fetchTodosFailure = (error) => {
  return {
    type: FETCH_TODOS_FAILURE,
    payload: error,
  };
};
