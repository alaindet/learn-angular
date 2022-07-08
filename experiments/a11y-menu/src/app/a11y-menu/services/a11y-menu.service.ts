import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { share, takeUntil } from 'rxjs/operators';

import { A11yMenuFocusable } from '../types';

@Injectable()
export class A11yMenuService implements OnDestroy {

  private _destroy$ = new Subject<void>();
  private _open$ = new BehaviorSubject<boolean>(false);
  private _focus$ = new BehaviorSubject<A11yMenuFocusable>(null);
  private _confirmed$ = new Subject<A11yMenuFocusable>();
  private _canceled$ = new Subject<void>();

  destroy$ = this._destroy$.pipe(share(), takeUntil(this._destroy$));
  open$ = this._open$.pipe(share(), takeUntil(this._destroy$));
  focus$ = this._focus$.pipe(share(), takeUntil(this._destroy$));
  confirmed$ = this._confirmed$.pipe(share(), takeUntil(this._destroy$));
  canceled$ = this._canceled$.pipe(share(), takeUntil(this._destroy$));

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  // TODO
  openMenu(): void {}
  closeMenu(): void {}
  toggleMenu(): void {}
  focusNextItem(): void {}
  focusPreviousItem(): void {}
  focusFirstItem(): void {}
  focusLastItem(): void {}
  focusItemBySearch(): void {}
  focusHandle(): void {}
  confirmItem(): void {}
  cancel(): void {}
}
