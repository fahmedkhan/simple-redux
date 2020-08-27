import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import TopMenu from "./components/TopMenu";
import Home from "./components/Home";

function App() {
  return (
    <HashRouter history="browserHistory">
      <div>
        <TopMenu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
