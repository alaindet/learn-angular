import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BookItemActionDirective } from './book-item-action.directive';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookItemComponent implements AfterContentInit, OnDestroy {
  @Input() title!: string;
  @Input() authors!: string[];

  @Output() actionClicked = new EventEmitter<BookItemActionDirective['name']>();

  @ContentChildren(BookItemActionDirective)
  actions!: BookItemActionDirective[];

  private destroyed$ = new Subject<void>();

  ngAfterContentInit(): void {
    this.actions.forEach(action => {
      action.clicked
        .pipe(takeUntil(this.destroyed$))
        .subscribe(actionName => this.actionClicked.emit(actionName));
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }
}
