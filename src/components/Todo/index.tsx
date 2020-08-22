import React from "react";
import { Todo as TodoType } from "../../types";
import { connect } from "react-redux";
import toggleCompleted from "../../store/actions/toggleCompleted";
import deleteTodo from "../../store/actions/deleteTodo";

interface Props {
  todo: TodoType;
  toggleCompleted: any;
  deleteTodo: any;
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleCompleted: (todo: TodoType) => dispatch(toggleCompleted(todo)),
    deleteTodo: (id: number) => dispatch(deleteTodo(id)),
  };
};

const Todo: React.FC<Props> = ({ todo, toggleCompleted, deleteTodo }) => {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={() => toggleCompleted(todo)}
          checked={todo.completed}
        ></input>
        <label htmlFor="toggle">{todo.title}</label>
        <button
          className="destroy"
          onClick={() => deleteTodo(todo.id)}
        ></button>
      </div>
    </li>
  );
};

export default connect(null, mapDispatchToProps)(Todo);
