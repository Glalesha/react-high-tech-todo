import { ADD_TODO } from "../../consts";

const addTodo = (payload: any) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export default addTodo;
