import { CHANGE_TODO } from "../../consts";
import { Todo } from "../../types/index";

const changeTodo = (todo: Todo) => {
  return {
    type: CHANGE_TODO,
    payload: {
      todo,
    },
  };
};

export default changeTodo;
