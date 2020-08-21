import React from "react";
import { connect } from "react-redux";
import { ALL, ACTIVE, COMPLETED } from "../../consts";
import { all } from "redux-saga/effects";
import Filters from "../Filters/index";

interface Props {
}

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

const Footer: React.FC<Props> = ({  }) => {
  return (
    <footer className="footer">
      <span className="todo-count"></span>
      <Filters />
    </footer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
