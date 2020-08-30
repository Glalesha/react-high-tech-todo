import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from "./store/store";
import Main from "./components/Main/Main";
import SignPage from "./components/SignPage/SignPage";
import AuthProvider from "./components/Auth/Auth";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import "todomvc-common/base.css";
import "todomvc-app-css/index.css";

const App: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/" component={Main} />
            <Route exact path="/login" component={SignPage} />
            <Route path="*" component={(): any => "not found"} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
};

export default App;
