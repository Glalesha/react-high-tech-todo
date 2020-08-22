import { DELETE_TODO } from "../../consts";

const deleteTodo = (id: number) => {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
};

export default deleteTodo;
