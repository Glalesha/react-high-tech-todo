import React, { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Todo } from "../../types/index";
import changeTodo from "../../store/actions/changeTodo";

interface Props {
  resetLiClassName(): void;
  changeTodo(todo: Todo): void;
  todo: Todo;
}

const EditTodo: React.FC<Props> = ({ resetLiClassName, todo, changeTodo }) => {
  const [todoValue, setTodoValue] = useState(todo.title);

  const blurHandle = () => {
    resetLiClassName();
  };

  const handleChange = (e: any) => {
    setTodoValue(e.target.value);
    console.log(todoValue);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      console.log(todoValue);
      onBlur();
    }
  };

  const onBlur = () => {
    changeTodo({ ...todo, title: todoValue });
    resetLiClassName();
  };

  return (
    <input
      className="edit"
      onBlur={blurHandle}
      ref={(input) => input && input.focus()}
      value={todoValue}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    ></input>
  );
};

export default connect(null, { changeTodo })(EditTodo);
