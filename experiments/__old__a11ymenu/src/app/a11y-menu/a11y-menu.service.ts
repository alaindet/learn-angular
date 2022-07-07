import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { FocusedItem } from './focus';

@Injectable()
export class A11yMenuService implements OnDestroy {

  private _destroy$ = new Subject<void>();
  destroy$ = this._destroy$.asObservable();

  private _open$ = new BehaviorSubject<boolean>(false);
  open$ = this._open$.asObservable();

  private _focused$ = new BehaviorSubject<FocusedItem>(null);
  focused$ = this._focused$.asObservable();

  private itemIds: string[] = [];
  private itemIndex: number | null = null;
  private lastSearched: number | null = null;

  set open(isOpen: boolean) {
    this._open$.next(isOpen);
  }

  get open(): boolean {
    return this._open$.getValue();
  }

  set focused(item: FocusedItem) {
    this._focused$.next(item);
  }

  addItem(itemId: string) {
    this.itemIds.push(itemId);
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  focusHandle() {
    this._focused$.next('handle');
  }

  focusFirstItem() {
    this.itemIndex = 0;
    const itemId = this.itemIds[this.itemIndex];
    this._focused$.next(itemId);
  }

  focusLastItem() {
    this.itemIndex = this.itemIds.length - 1;
    const itemId = this.itemIds[this.itemIndex];
    this._focused$.next(itemId);
  }

  focusPreviousItem() {
    if (this.itemIndex === null) {
      return;
    }

    if (this.itemIndex === 0) {
      this.focusLastItem();
      return;
    }

    this.itemIndex--;
    const itemId = this.itemIds[this.itemIndex];
    this._focused$.next(itemId);
  }

  focusNextItem() {
    if (this.itemIndex === null) {
      return;
    }

    if (this.itemIndex === (this.itemIds.length - 1)) {
      this.focusFirstItem();
      return;
    }

    this.itemIndex++;
    const itemId = this.itemIds[this.itemIndex];
    this._focused$.next(itemId);
  }

  focusBySearch(char: string) {

    const c = char.toLowerCase();
    const foundItems = this.itemIds.filter(id => id.toLowerCase()[0] === c);

    if (!foundItems.length) {
      return;
    }

    if (this.lastSearched === null) {
      this.lastSearched = 0;
    } else {
      this.lastSearched++;
      if (this.lastSearched > foundItems.length - 1) {
        this.lastSearched = 0;
      }
    }

    let found = foundItems[this.lastSearched];
    this._focused$.next(found);
  }

  openMenu() {
    this._open$.next(true);
  }

  closeMenu() {
    this._open$.next(false);
  }
}
