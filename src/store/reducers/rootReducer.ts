import { Todo } from "../../types";

const initState = {
  todos: [],
};

export default function rootReducer(state = initState, action: any) {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        todos: action.payload,
      };

    case "TOGGLE_COMPLETED":
      return {
        ...state,
        todos: state.todos.map((todo: Todo) => {
          return todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo;
        }),
      };
    default:
      return state;
  }
}
