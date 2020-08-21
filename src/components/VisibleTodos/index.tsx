import React from "react";
import { Todos } from "../../types";
import Todo from "../Todo/index";

interface Props {
  todos: Todos;
}

const VisibleTodos: React.FC<Props> = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <Todo todo={todo} />
          </li>
        );
      })}
    </ul>
  );
};

export default VisibleTodos;
