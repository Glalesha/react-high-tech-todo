import React, { useEffect, useContext } from "react";
import { connect } from "react-redux";
import fetchTodos from "../../store/actions/fetchTodos";
import VisibleTodos from "../VisibleTodos/index";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Todo, Todos, User } from "../../types";
import toggleAll from "../../store/actions/toggleAll";
import { auth } from "../../firebase/index";
import { AuthContext } from "../Auth/Auth";
import Button from "../Button/Button";

interface Props {
  fetchTodos(userId: string): void;
  toggleAll(activeTodoCount: number): void;
  todos: Todos;
}

const Main: React.FC<Props> = ({ todos, fetchTodos, toggleAll }) => {
  const user: User = useContext(AuthContext as any);
  useEffect(() => {
    fetchTodos(user.currentUser.uid);
  }, [user, fetchTodos]);

  const activeTodoCount = todos.filter((todo: Todo) => !todo.completed).length;

  const logOut = () => {
    auth.signOut();
  };

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
      <Button onChildClick={logOut}>Log out</Button>
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
