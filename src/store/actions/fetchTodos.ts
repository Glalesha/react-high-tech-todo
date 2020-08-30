import { FETCH_TODOS } from "../../consts";

const fetchTodos = (userId: string) => {
  return {
    type: FETCH_TODOS,
    payload: {
      userId,
    },
  };
};

export default fetchTodos;
