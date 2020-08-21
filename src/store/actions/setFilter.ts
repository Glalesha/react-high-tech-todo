import { SET_FILTER } from "../../consts";

const setFilter = (payload: any) => {
  return {
    type: SET_FILTER,
    payload: payload,
  };
};

export default setFilter;
