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

export interface TodosAction {
  payload: {
    todos: Todos;
    completed?: boolean | undefined;
  };
}

export interface State {
  todos: Todos;
  filters: Filters;
}
