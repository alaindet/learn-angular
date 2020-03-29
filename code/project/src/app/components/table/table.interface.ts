import { TemplateRef } from '@angular/core';

export interface TableColumn {
  name: string;
  type: 'string' | 'html' | 'template',
  template?: TemplateRef<any>;
}

interface TableTemplateContext {
  [contextKey: string]: any;
}

export type TableRowValue = string | boolean | number | TableTemplateContext;

export type TableRow = TableRowValue[];
