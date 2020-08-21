export type Todo = {
  title: string;
  completed: boolean;
  id: number;
};
export type Todos = Array<Todo>;

export interface TodosAction {
  payload: {
    todos: Todos;
    completed?: boolean | undefined;
  };
}
