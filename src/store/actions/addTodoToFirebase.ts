import { ADD_TODO_TO_FIREBASE } from "../../consts";

const addTodoToFirebase = (payload: any) => {
  return {
    type: ADD_TODO_TO_FIREBASE,
    payload,
  };
};

export default addTodoToFirebase;
