export type Todo = {
  id: string;
  title: string;
  isDone: boolean;
};

export type UpdateTodoDto = Partial<Todo> & {
  id: Todo['id'];
};

export type CreateTodoDto = {
  title: Todo['title'];
};
