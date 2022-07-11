import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { share, takeUntil } from 'rxjs/operators';

import { A11yMenuFocusable, FOCUS_HANDLE, KeyboardKey } from '../types';

@Injectable()
export class A11yMenuService implements OnDestroy {

  private _destroy$ = new Subject<void>();
  private _open$ = new BehaviorSubject<boolean>(false);
  private _isMenuActive$ = new BehaviorSubject<boolean>(false);
  private _focus$ = new BehaviorSubject<A11yMenuFocusable>(null);
  private _confirmed$ = new Subject<A11yMenuFocusable>();
  private _canceled$ = new Subject<void>();

  destroy$ = this._destroy$.pipe(share(), takeUntil(this._destroy$));
  open$ = this._open$.pipe(share(), takeUntil(this._destroy$));
  isMenuActive$ = this._isMenuActive$.pipe(share(), takeUntil(this._destroy$));
  focus$ = this._focus$.pipe(share(), takeUntil(this._destroy$));
  confirmed$ = this._confirmed$.pipe(share(), takeUntil(this._destroy$));
  canceled$ = this._canceled$.pipe(share(), takeUntil(this._destroy$));

  private items: string[] = [];
  private itemsIndex: number = -1;
  private subindex: number = -1;

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  openMenu(): void {
    this._open$.next(true);
  }

  closeMenu(): void {
    this.resetSearch();
    this._open$.next(false);
  }

  toggleMenu(): void {
    const open = this._open$.getValue();
    this._open$.next(!open);
  }

  focusItemByValue(value?: string): void {
    if (!value) {
      this._focus$.next(null);
      return;
    }

    const found = this.items.findIndex(i => i === value) !== -1;
    this._focus$.next(found ? value : null);
  }

  focusPreviousItem(): void {
    this.resetSearch();
    this.focusItemWithIndex(this.itemsIndex - 1);
  }

  focusNextItem(): void {
    this.resetSearch();
    this.focusItemWithIndex(this.itemsIndex + 1);
  }

  focusFirstItem(): void {
    this.resetSearch();
    this.focusItemWithIndex(0);
  }

  focusLastItem(): void {
    this.resetSearch();
    this.focusItemWithIndex(this.items.length - 1);
  }

  focusItemBySearch(key: KeyboardKey): void {
    const letter = key.toLowerCase();
    const found = this.items.reduce<{ value: string; index: number; }[]>(
      (tot, value, index) => {
        if (letter !== value.toLowerCase()[0]) return tot;
        tot.push({ value, index });
        return tot;
      }, [],
    );

    if (!found.length) {
      this._focus$.next(null);
      return;
    }

    if (this.subindex === -1) {
      this.subindex = 0;
    } else {
      this.subindex++;
      if (this.subindex > found.length - 1) {
        this.subindex = 0;
      }
    }

    this.focusItemWithIndex(found[this.subindex].index);
  }

  focusHandle(): void {
    console.log('focusing handle'); // TODO: Remove
    this._focus$.next(FOCUS_HANDLE);
  }

  confirmItem(item: A11yMenuFocusable): void {
    this.resetSearch();
    this._confirmed$.next(item);
  }

  cancel(): void {
    this.resetSearch();
    this._canceled$.next();
  }

  activateMenu(): void {
    this._isMenuActive$.next(true);
  }

  deactivateMenu(): void {
    this._isMenuActive$.next(false);
  }

  addItem(item: string): void {
    this.items.push(item);
  }

  private resetSearch(): void {
    this.subindex = -1;
  }

  // Focuses a menu item with wrapping, i.e.
  // - The "next" item after the last is the first
  // - The "previous" item before the first is the last
  private focusItemWithIndex(index: number | null): void {
    if (index === null) {
      this.itemsIndex = -1;
      this._focus$.next(null);
      return;
    }

    const [first, last] = [0, this.items.length - 1];
    if (index < first) index = last;
    if (index > last) index = first;
    this.itemsIndex = index;
    this._focus$.next(this.items[this.itemsIndex]);
  }
}
