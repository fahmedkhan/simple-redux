import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import TopMenu from "./components/TopMenu";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import UsersContainer from "./components/users/UsersContainer";
import TodosContainer from "./components/todos/TodosContainer";
import PhotosContainer from "./components/photos/PhotosContainer";
import PostsContainer from "./components/posts/PostsContainer";
import AlbumsContainer from "./components/albums/AlbumsContainer";

function App() {
  return (
    <Provider store={store}>
      <HashRouter history="browserHistory">
        <div>
          <TopMenu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/users" component={UsersContainer} />
            <Route path="/todos" component={TodosContainer} />
            <Route path="/posts" component={PostsContainer} />
            <Route path="/albums" component={AlbumsContainer} />
            <Route path="/photos" component={PhotosContainer} />
          </Switch>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
