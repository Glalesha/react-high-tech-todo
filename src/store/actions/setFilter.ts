import { SET_FILTER } from "../../consts";

const setFilter = (filter: string) => {
  return {
    type: SET_FILTER,
    payload: {
      filter,
    },
  };
};

export default setFilter;
