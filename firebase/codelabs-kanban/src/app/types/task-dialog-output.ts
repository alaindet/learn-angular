import { Task } from './task';

export interface TaskDialogOutput {
  task: Task;
  delete?: boolean;
}
