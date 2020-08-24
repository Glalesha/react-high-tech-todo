import React, { useState, useEffect } from "react";
import { Todo as TodoType } from "../../types";
import { connect } from "react-redux";
import classNames from "classnames";
import EditTodo from "../EditTodo/index";
import toggleCompleted from "../../store/actions/toggleCompleted";
import deleteTodo from "../../store/actions/deleteTodo";

interface Props {
  todo: TodoType;
  toggleCompleted(todo: TodoType): void;
  deleteTodo(id: number): void;
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleCompleted: (todo: TodoType) => dispatch(toggleCompleted(todo)),
    deleteTodo: (id: number) => dispatch(deleteTodo(id)),
  };
};

const Todo: React.FC<Props> = ({ todo, toggleCompleted, deleteTodo }) => {
  const handleDoubleClick = () => {
    setClassName(getLiClassName(todo.completed, true));
  };

  const getLiClassName = (completed: boolean, editing?: boolean) => {
    return classNames({
      completed,
      editing,
    });
  };

  const resetLiClassName = () => {
    setClassName(getLiClassName(todo.completed, false));
  };

  useEffect(() => {
    setClassName(getLiClassName(todo.completed));
  }, [todo.completed]);

  const [className, setClassName] = useState(getLiClassName(todo.completed));

  return (
    <li className={className}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={() => toggleCompleted(todo)}
          checked={todo.completed}
        ></input>
        <label onDoubleClick={handleDoubleClick}>{todo.title}</label>
        <button
          className="destroy"
          onClick={() => deleteTodo(todo.id)}
        ></button>
      </div>
      <EditTodo resetLiClassName={resetLiClassName} todo={todo} />
    </li>
  );
};

export default connect(null, mapDispatchToProps)(Todo);
