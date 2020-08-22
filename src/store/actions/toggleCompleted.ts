import { Todo } from "../../types/index";

const toggleCompleted = (todo: Todo) => {
  return {
    type: "TOGGLE_COMPLETED",
    payload: {
      todo,
    },
  };
};

export default toggleCompleted;
