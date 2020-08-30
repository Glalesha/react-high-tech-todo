import React from "react";
import { connect } from "react-redux";
import { auth } from "../../firebase/index";
import Filters from "../Filters/index";
import clearCompleted from "../../store/actions/clearCompleted";

interface Props {
  activeTodoCount: number;
  clearCompleted: any;
}

const Footer: React.FC<Props> = ({ activeTodoCount, clearCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        {activeTodoCount}{" "}
        {activeTodoCount > 1 || activeTodoCount === 0 ? "items" : "item"} left
      </span>
      <Filters />
      <button className="clear-completed" onClick={() => clearCompleted()}>
        Clear completed
      </button>
    </footer>
  );
};

export default connect(null, { clearCompleted })(Footer);
