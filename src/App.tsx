import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from "./store/store";
import Main from "./components/Main/index";
import LoginPage from "./components/LoginPage/index";
import SignUpPage from "./components/SignUpPage/index";
import AuthProvider from "./components/Auth/index";
import PrivateRoute from "./components/PrivateRoute/index";
import "todomvc-common/base.css";
import "todomvc-app-css/index.css";

const App: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <PrivateRoute path="/" component={Main} />
            <Route path="*" component={(): any => "not found"} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
};

export default App;
