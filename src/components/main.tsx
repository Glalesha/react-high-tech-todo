import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import fetchTodos from "../store/actions/fetchTodos";
import TodoMain from "./TodoMain/index";

const Main: React.FC<any> = ({ fetchTodos }) => {
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <Switch>
        {/* <Route exact path="/" component={LoginPage} /> */}
        <Route path="/" component={TodoMain} />
        <Route path="*" component={(): any => "not found"} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchTodos: () => dispatch(fetchTodos()),
  };
};

export default connect(null, mapDispatchToProps)(Main);
