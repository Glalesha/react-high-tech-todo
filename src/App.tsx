import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store";
import Main from "./components/main";
import "todomvc-common/base.css";
import "todomvc-app-css/index.css";

const App: React.FC<any> = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
