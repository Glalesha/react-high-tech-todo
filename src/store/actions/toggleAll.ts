import { TOGGLE_ALL } from "../../consts";

const toggleAll = (activeTodoCount: number) => {
  return {
    type: TOGGLE_ALL,
    payload: {
      activeTodoCount,
    },
  };
};

export default toggleAll;
