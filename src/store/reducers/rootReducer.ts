import { Todo } from "../../types";
import {
  GET_TODOS,
  TOGGLE_COMPLETED,
  SET_FILTER,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_ALL,
  CLEAR_COMPLETED,
  CHANGE_TODO,
} from "../../consts";
import { State } from "../../types";

const initState: State = {
  todos: [],
  filters: {
    all: true,
    active: false,
    completed: false,
  },
};

export default function rootReducer(state = initState, action: any) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload.todos,
      };

    case TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo: Todo) => {
          return todo.id === action.payload.todo.id
            ? { ...todo, completed: !todo.completed }
            : todo;
        }),
      };

    case SET_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...Object.fromEntries(
            Object.entries(state.filters).map(([filter, isActive]) => {
              return action.payload.filter === filter
                ? [filter, true]
                : [filter, false];
            })
          ),
        },
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload.todo],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload.id;
        }),
      };

    case TOGGLE_ALL:
      return {
        ...state,
        todos: state.todos.map((item) => {
          return { ...item, completed: !!action.payload.activeTodoCount };
        }),
      };

    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter((item) => !item.completed),
      };

    case CHANGE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo.id === action.payload.todo.id
            ? action.payload.todo
            : todo;
        }),
      };

    default:
      return state;
  }
}
