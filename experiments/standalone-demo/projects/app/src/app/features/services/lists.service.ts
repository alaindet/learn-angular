import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

import { randomHash } from '@/app/shared/functions';
import { EditListDTO, List, ListEntities } from '../types';

@Injectable()
export class ListsService implements OnDestroy {
  private _lists: ListEntities = {};
  private _lists$ = new BehaviorSubject<ListEntities>(this._lists);
  lists$ = this._lists$.asObservable().pipe(map((m) => Object.values(m)));

  private _list: List | null = null;
  private _list$ = new BehaviorSubject<List | null>(this._list);
  list$ = this._list$.asObservable();

  ngOnDestroy() {
    this._lists$.complete();
  }

  startEditingList(id: string) {
    if (!this._lists[id]) throw new Error(`List #${id} not found`);
    this._list = { ...this._lists[id] };
    this._list$.next(this._list);
  }

  clearEditingList() {
    this._list = null;
    this._list$.next(this._list);
  }

  createList(dto: EditListDTO) {
    const id = randomHash(5);

    // Name must be unique
    for (const list of Object.values(this._lists)) {
      if (list.name === dto.name) {
        throw new Error(`List with name "${list.name}" already exists`);
      }
    }

    const list = { id, ...dto };
    this._lists = { ...this._lists, [id]: list };
    this._lists$.next(this._lists);
  }

  editList(id: string, dto: EditListDTO) {
    if (!this._lists[id]) throw new Error(`List #${id} not found`);

    // Name must be unique
    for (const list of Object.values(this._lists)) {
      if (list.name === dto.name) {
        throw new Error(`List with name "${list.name}" already exists`);
      }
    }

    const list = { ...this._lists[id], ...dto };
    this._lists = { ...this._lists, [id]: list };
    this._list$.next(this._list);
  }

  removeList(id: string) {
    if (!this._lists[id]) throw new Error(`List #${id} not found`);
    const { [id]: _, ...lists } = this._lists;
    this._lists = lists;
    this._lists$.next(this._lists);
  }
}
