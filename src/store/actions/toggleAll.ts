import { TOGGLE_ALL } from "../../consts";

const toggleAll = (payload: any) => {
  return {
    type: TOGGLE_ALL,
    payload,
  };
};

export default toggleAll;
