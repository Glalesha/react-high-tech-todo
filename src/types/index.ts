export type Todo = {
  title: string;
  completed: boolean;
  id: number;
  userId: string;
};
export type Todos = Array<Todo>;

export interface Filters {
  all: boolean;
  active: boolean;
  completed: boolean;
}

export interface State {
  todos: Todos;
  filters: Filters;
}

export interface UserFound {
  currentUser: {
    uid: string;
  };
}

export interface User {
  currentUser: {
    uid: string;
  };
}

export interface UserNotFount {
  currentUser: null;
}

export interface ActionWithTodo {
  payload: {
    todo: Todo;
  };

  type: string;
}

export interface ActionWithId {
  payload: {
    id: number;
  };

  type: string;
}

export interface ActionWithActiveTodoCount {
  payload: {
    activeTodoCount: number;
  };

  type: string;
}

export interface ActionWithUserId {
  payload: {
    userId: string;
  };

  type: string;
}
