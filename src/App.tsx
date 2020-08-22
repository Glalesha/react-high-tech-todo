import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import store from "./store/store";
import Main from "./components/Main";
import "todomvc-common/base.css";
import "todomvc-app-css/index.css";

const App: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={LoginPage} /> */}
          <Route path="/" component={Main} />
          <Route path="*" component={(): any => "not found"} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
