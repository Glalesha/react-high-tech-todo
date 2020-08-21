import React, { useState } from "react";
import { connect } from "react-redux";
import addTodoToFirebase from "../../store/actions/addTodoToFirebase";

interface Props {
  addTodo: any;
}

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addTodo: (todo: any) => dispatch(addTodoToFirebase(todo)),
  };
};

const Header: React.FC<Props> = ({ addTodo }) => {
  const [todoValue, setTodoValue]: [string, any] = useState("");

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter" && todoValue) {
      addTodo({ title: todoValue, completed: false });
      setTodoValue("");
    }
  };

  return (
    <div>
      <h1>todos</h1>
      <input
        className="new-todo"
        type="text"
        placeholder="What needs to be done?"
        onChange={(e) => setTodoValue(e.currentTarget.value)}
        value={todoValue}
        onKeyPress={handleKeyPress}
      ></input>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
