import React, { useEffect } from "react";
import { connect } from "react-redux";
import fetchTodos from "../../store/actions/fetchTodos";
import VisibleTodos from "../VisibleTodos/index";
import Header from "../Header/index";
import Footer from "../Footer/index";

interface Props {
  fetchTodos: () => {};
}

const mapStateToProps = (state: any) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchTodos: () => dispatch(fetchTodos()),
  };
};

const TodoMain: React.FC<any> = ({ todos, fetchTodos }) => {
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <main className="todoapp">
        <Header />
        <section className="main">
          <VisibleTodos todos={todos} />
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoMain);
