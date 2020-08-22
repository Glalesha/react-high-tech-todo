export type Todo = {
  title: string;
  completed: boolean;
  id: number;
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
