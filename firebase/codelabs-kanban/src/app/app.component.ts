import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';

import { INITIAL_TASKS } from './initial-tasks';
import { Task, TaskDialogOutput } from './types';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todo: Task[] = INITIAL_TASKS;
  inProgress: Task[] = [];
  done: Task[] = [];

  constructor(
    private dialog: MatDialog,
  ) {}

  editTask(list: string, task: Task): void {
    // ...
  }

  drop(event: CdkDragDrop<Task[]>): void {

    // Ignore movements inside the same list
    if (
      event.previousContainer === event.container ||
      !event.container.data ||
      !event.previousContainer.data
    ) {
      return;
    }

    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  newTask(): void {

    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task: {},
      },
    });

    dialogRef
      .afterClosed()
      .subscribe((result: TaskDialogOutput) => this.todo.push(result.task));
  }
}
