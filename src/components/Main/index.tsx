import React, { useEffect } from "react";
import { connect } from "react-redux";
import fetchTodos from "../../store/actions/fetchTodos";
import VisibleTodos from "../VisibleTodos/index";
import Header from "../Header/index";
import Footer from "../Footer/index";
import { Todo } from "../../types";
import toggleAll from "../../store/actions/toggleAll";

interface Props {
  fetchTodos: () => {};
  toggleAll: any;
}

const mapStateToProps = (state: any) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchTodos: () => dispatch(fetchTodos()),
    toggleAll: (activeTodoCount: number) =>
      dispatch(toggleAll(activeTodoCount)),
  };
};

const Main: React.FC<any> = ({ todos, fetchTodos, toggleAll }) => {
  useEffect(() => {
    fetchTodos();
  }, []);

  const activeTodoCount = todos.filter((todo: Todo) => !todo.completed).length;
  console.log(activeTodoCount);

  return (
    <div>
      <main className="todoapp">
        <Header todos={todos} />
        <section className="main">
          {todos.length ? (
            <div>
              <input
                className="toggle-all"
                type="checkbox"
                onChange={() => {}}
                checked={!activeTodoCount}
              ></input>
              <label
                htmlFor="toggle-all"
                onClick={() => toggleAll(activeTodoCount)}
              ></label>
            </div>
          ) : null}
          <VisibleTodos todos={todos} />
        </section>
        <Footer activeTodoCount={activeTodoCount} />
      </main>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
