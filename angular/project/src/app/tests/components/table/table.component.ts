import { Component, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'test-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TestTableComponent {

  @ViewChild('customColumn', { read: TemplateRef, static: false })
  public customColumn: TemplateRef<any>;

  public cols: any = [
    { name: 'Strings', type: 'string' },
    { name: 'HTML', type: 'html' },
    { name: 'Templates', type: 'template' },
  ];

  public rows: any = [
    ['First row', '<em>First row</em>', { name: 'First row' }],
    ['Second row', '<strong>Second row</strong>', { name: 'Second row' }],
    ['Third row', '<mark>Third row</mark>', { name: 'Third row' }],
  ];

  constructor(
    private cd: ChangeDetectorRef,
  ) {}

  // Too difficult to set template in an ngAfterViewChecked lifecycle hook!
  ngAfterViewChecked() {
    this.cols[2].template = this.customColumn;
    this.cd.detectChanges();
  }
}
