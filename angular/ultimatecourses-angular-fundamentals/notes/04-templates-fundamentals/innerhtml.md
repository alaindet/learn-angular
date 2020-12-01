# InnerHTML

This is a built-in directive and takes precedence from child nodes of any element. Example

```
import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  template: `
    <p>{{ foo }}</p>
    <p [innerHTML]="foo"></p>
    <p [innerHTML]="bar">{{ foo }}</p>
  `
})
export class AppComponent {
  foo = 'fooString';
  bar = 'barString';
}
```

Compiles to

```
<p>fooString</p>
<p>fooString</p>
<p>barString</p>
```
