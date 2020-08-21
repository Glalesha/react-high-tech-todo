import React from "react";
import { connect } from "react-redux";
import setFilter from "../../store/actions/setFilter";

interface Props {
  filters: any;
  setFilter: any;
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setFilter: (filter: string) => dispatch(setFilter(filter)),
  };
};

const mapStateToProps = (state: any) => {
  return {
    filters: state.filters,
  };
};

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
            >
              {filter.slice(0, 1).toUpperCase() + filter.slice(1).toLowerCase()}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
