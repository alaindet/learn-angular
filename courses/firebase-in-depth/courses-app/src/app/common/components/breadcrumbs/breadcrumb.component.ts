import { Component, HostListener, Input, inject } from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { asBoolean } from '../../utils';

const imports = [
  NgIf,
  NgTemplateOutlet,
  RouterLink,
];

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports,
  template: `
    <ng-container *ngIf="url; else noUrlRef">
      <a [routerLink]="url" class="ui-breadcrumb" [class.--first]="isFirst">
        <ng-container *ngTemplateOutlet="contentRef" />
      </a>
    </ng-container>

    <ng-template #noUrlRef>
      <span class="ui-breadcrumb" [class.--first]="isFirst">
        <ng-container *ngTemplateOutlet="contentRef" />
      </span>
    </ng-template>

    <ng-template #contentRef>
      <ng-content></ng-content>
    </ng-template>
  `,
  styles: [`
    .ui-breadcrumb {
      &:not(.--first)::before {
        content: ' / ';
      }
    }
  `],
})
export class BreadcrumbComponent {

  @Input() url?: string | string[];
  @Input('isFirst') set isFirstInput(isFirst: boolean | string) {
    this.isFirst = asBoolean(isFirst);
  }

  isFirst = false;

  private router = inject(Router);

  @HostListener('click')
  onClick() {
    if (!this.url || (Array.isArray(this.url) && !this.url.length)) {
      return;
    }
    this.router.navigate(Array.isArray(this.url) ? this.url : [this.url]);
  }
}
