import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import setFilter from "../../store/actions/setFilter";

interface Props {
  filters: any;
  setFilter: any;
}

const Filters: React.FC<Props> = ({ filters, setFilter }) => {
  return (
    <ul className="filters">
      {Object.entries(filters).map(([filter, isActive], index) => {
        return (
          <li key={index}>
            <a
              href="#"
              className={isActive ? "selected" : ""}
              onClick={() => setFilter(filter)}
              data-test={filter}
            >
              {filter.slice(0, 1).toUpperCase() + filter.slice(1).toLowerCase()}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default connect(
  (state: any) => {
    return {
      filters: state.filters,
    };
  },
  { setFilter }
)(Filters);
