import { GET_TODOS } from "../../consts";
import { Todos } from "../../types";

const getTodos = (todos: Todos) => {
  return {
    type: GET_TODOS,
    payload: {
      todos,
    },
  };
};

export default getTodos;
