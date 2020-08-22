import React from "react";
import { connect } from "react-redux";
import { ALL, ACTIVE, COMPLETED } from "../../consts";
import { all } from "redux-saga/effects";
import Filters from "../Filters/index";
import { act } from "react-dom/test-utils";

interface Props {
  activeTodoCount: number;
}

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

const Footer: React.FC<Props> = ({ activeTodoCount }) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        {activeTodoCount}{" "}
        {activeTodoCount > 1 || activeTodoCount === 0 ? "items" : "item"} left
      </span>
      <Filters />
    </footer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
