import React from "react";
import { Todo as TodoType } from "../../types";
import { connect } from "react-redux";
import toggleCompleted from "../../store/actions/toggleCompleted";

interface Props {
  todo: TodoType;
  toggleCompleted: any;
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleCompleted: (todo: TodoType) => dispatch(toggleCompleted(todo)),
  };
};

const deleteTodo = () => {};

const Todo: React.FC<Props> = ({ todo, toggleCompleted }) => {
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
        <button className="destroy" onClick={() => deleteTodo()}></button>
      </div>
    </li>
  );
};

export default connect(null, mapDispatchToProps)(Todo);
