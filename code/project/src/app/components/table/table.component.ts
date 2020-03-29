import { Component, Input } from '@angular/core';
import { TableColumn, TableRow } from './table.interface';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() cols: TableColumn[];
  @Input() rows: TableRow[];
}
