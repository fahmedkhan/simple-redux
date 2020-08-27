import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import TopMenu from "./components/TopMenu";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import UsersContainer from "./components/UsersContainer";

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
          </Switch>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
