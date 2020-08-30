import React, { useEffect, useContext } from "react";
import { connect } from "react-redux";
import fetchTodos from "../../store/actions/fetchTodos";
import VisibleTodos from "../VisibleTodos/index";
import Header from "../Header/index";
import Footer from "../Footer/index";
import { Todo, Todos } from "../../types";
import toggleAll from "../../store/actions/toggleAll";
import { auth } from "../../firebase/index";
import { AuthContext } from "../Auth/index";
import Button from "../Button/index";

interface Props {
  fetchTodos(userId: string): void;
  toggleAll(activeTodoCount: number): void;
  todos: Todos;
}

const Main: React.FC<any> = ({ todos, fetchTodos, toggleAll }) => {
  const user: any = useContext(AuthContext);
  useEffect(() => {
    fetchTodos(user.currentUser.uid);
  }, [user]);

  const activeTodoCount = todos.filter((todo: Todo) => !todo.completed).length;

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
      <Button onClick={() => auth.signOut()}>Logout</Button>
    </div>
  );
};

export default connect(
  (state: any) => {
    return {
      todos: state.todos,
    };
  },
  { fetchTodos, toggleAll }
)(Main);
