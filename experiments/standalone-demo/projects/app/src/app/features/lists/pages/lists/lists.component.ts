import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EditListDTO } from '@/app/features/types';
import { ListsService } from '../../../services';
import { ListFormComponent } from '../../components';
import { take } from 'rxjs';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [CommonModule, ListFormComponent],
  template: `
    <h1>Lists component</h1>
    <app-list-form
      [list]="list$ | async"
      (confirmed)="onConfirmList($event)"
    ></app-list-form>
    <ul>
      <li *ngFor="let list of lists$ | async">
        <button type="button" (click)="onStartEditingList(list.id)">
          {{ list.name }}
        </button>
      </li>
    </ul>
  `,
})
export class ListsPageComponent {
  listsSvc = inject(ListsService);
  lists$ = this.listsSvc.lists$;
  list$ = this.listsSvc.list$;

  @ViewChild(ListFormComponent, { static: true })
  formComponent!: ListFormComponent;

  onConfirmList(dto: EditListDTO) {
    this.list$.pipe(take(1)).subscribe((list) => {
      try {
        if (list === null) {
          this.listsSvc.createList(dto);
        } else {
          this.listsSvc.editList(list.id, dto);
          this.listsSvc.clearEditingList();
        }

        this.formComponent.clearAndFocus();
      } catch (error) {
        alert(error);
      }
    });
  }

  onStartEditingList(id: string) {
    this.listsSvc.startEditingList(id);
  }
}
