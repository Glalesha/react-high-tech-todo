import React from "react";
import { Todos } from "../../types";
import Todo from "../Todo/index";
import { connect } from "react-redux";

interface Props {
  todos: Todos;
  filters: any;
}

const mapStateToProps = (state: any) => {
  return {
    filters: state.filters,
  };
};

const VisibleTodos: React.FC<Props> = ({ todos, filters }) => {
  const selectedFilter: any = Object.entries(filters).find(
    ([filter, isActive]) => {
      return isActive;
    }
  );

  const visibleTodos = todos.filter((todo) => {
    switch (selectedFilter[0]) {
      case "all":
        return todo;
      case "active":
        return !todo.completed;
      case "completed":
        return todo.completed;
    }
  });

  return (
    <ul className="todo-list">
      {visibleTodos.map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </ul>
  );
};

export default connect(mapStateToProps)(VisibleTodos);
