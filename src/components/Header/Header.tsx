import React, { useState, useContext } from "react";
import { connect } from "react-redux";
import { AuthContext } from "../Auth/Auth";
import { Todos, Todo } from "../../types";
import addTodo from "../../store/actions/addTodo";
import { getNewId } from "../../utils/utils";

interface Props {
  addTodo(todo: Todo): void;
  todos: Todos;
}

const Header: React.FC<Props> = ({ addTodo, todos }) => {
  const user: any = useContext(AuthContext);
  const [todoValue, setTodoValue]: [string, any] = useState("");

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter" && todoValue) {
      const newTodo = {
        title: todoValue,
        completed: false,
        id: getNewId(todos),
        userId: user.currentUser.uid,
      };

      addTodo(newTodo);
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
        onChange={(e) => setTodoValue(e.target.value)}
        value={todoValue}
        onKeyPress={handleKeyPress}
      ></input>
    </div>
  );
};

export default connect(null, { addTodo })(Header);
