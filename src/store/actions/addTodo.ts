import { ADD_TODO } from "../../consts";
import { Todo } from "../../types/index";

const addTodo = (todo: Todo) => {
  return {
    type: ADD_TODO,
    payload: {
      todo,
    },
  };
};

export default addTodo;
