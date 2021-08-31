import { Task } from './task';

export interface TaskDialogInput {
  task: Partial<Task>;
  enableDelete: boolean;
}
