import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import todoReducer from "./todo/todoReducer";
import postReducer from "./post/postReducer";
import albumReducer from "./album/albumReducer";
import photoReducer from "./photo/photoReducer";

const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
  post: postReducer,
  album: albumReducer,
  photo: photoReducer,
});

export default rootReducer;
