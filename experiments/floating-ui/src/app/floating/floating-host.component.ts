import { Component, TemplateRef, OnInit, OnDestroy } from '@angular/core';
import { forkJoin, Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { FloatingService } from './floating.service';

@Component({
  selector: 'app-floating-host',
  template: `
    <ng-container *ngFor="let template of templates$ | async">
      <ng-container [ngTemplateOutlet]="template"></ng-container>
    ></ng-container>
  `,
})
export class FloatingHostComponent implements OnInit, OnDestroy {

  templates$!: Observable<TemplateRef<void>[]>;
  destroy$ = new Subject<void>();

  constructor(
    public floatingService: FloatingService,
  ) {}

  ngOnInit(): void {
    const templateNames = this.floatingService.getTemplateNames();
    const templates$ = [];

    for (const templateName of templateNames) {
      templates$.push(this.floatingService.getFloatingPairTemplate(templateName));
    }

    // TODO
    console.log('FloatingHostComponent ngOnInit', templateNames, templates$);

    forkJoin(templates$).subscribe(tmp => console.log('tmp', tmp));

    // this.templates$ = this.floatingService.getAllFloatingTemplates()
    //   .pipe(takeUntil(this.destroy$))
    //   // TODO
    //   .pipe(tap(templates => console.log('FloatingHostComponent', templates)));

    // // TODO
    // console.log('FloatingHostComponent this.templates$', this.templates$);
    // this.floatingService.getAllFloatingTemplates()
    //   .subscribe(ciao => console.log('ciao', ciao));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
