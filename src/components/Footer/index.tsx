import React from "react";
import { connect } from "react-redux";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <footer className="footer">
      <span className="todo-count"></span>
      <ul className="filters">
        <li>
          <a href="#">All</a>
        </li>
        <span></span>
        <li>
          <a href="#">Active</a>
        </li>
        <span></span>
        <li>
          <a href="#">Completed</a>
        </li>
        <span></span>
      </ul>
    </footer>
  );
};

export default connect()(Footer);
