import React from "react";
import { connect } from "react-redux";
import { ALL, ACTIVE, COMPLETED } from "../../consts";
import { all } from "redux-saga/effects";
import Filters from "../Filters/index";
import { act } from "react-dom/test-utils";
import clearCompleted from "../../store/actions/clearCompleted";

interface Props {
  activeTodoCount: number;
  clearCompleted: any;
}

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    clearCompleted: () => dispatch(clearCompleted()),
  };
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
