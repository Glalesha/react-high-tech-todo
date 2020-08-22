import { DELETE_TODO } from "../../consts";

const deleteTodo = (payload: any) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export default deleteTodo;
