import axios from "axios";
import {
  FETCH_ALBUMS_REQUEST,
  FETCH_ALBUMS_SUCCESS,
  FETCH_ALBUMS_FAILURE,
} from "./albumTypes";

export const fetchAlbums = () => {
  return (dispatch) => {
    dispatch(fetchAlbumsRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        const albums = response.data;
        dispatch(fetchAlbumsSuccess(albums));
      })
      .catch((error) => {
        dispatch(fetchAlbumsFailure(error.message));
      });
  };
};

export const fetchAlbumsRequest = () => {
  return {
    type: FETCH_ALBUMS_REQUEST,
  };
};

export const fetchAlbumsSuccess = (albums) => {
  return {
    type: FETCH_ALBUMS_SUCCESS,
    payload: albums,
  };
};

export const fetchAlbumsFailure = (error) => {
  return {
    type: FETCH_ALBUMS_FAILURE,
    payload: error,
  };
};
