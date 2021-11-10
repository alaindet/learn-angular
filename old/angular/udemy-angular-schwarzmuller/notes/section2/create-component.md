# How to create a new component

1. Move to the app root
2. Run
   ```
   ng generate component foo
   # Same as ng g c foo
   ```
3. This will
   - Create a new `<app-foo>` component
   - Register the new component to `app.module.ts`
   - Create a new `/foo/` directory into `/app/`

## Selector

- It is **mandatory**
- Accepts any CSS selector, except
  - ID selectors, like `#app-foo`
  - Pseudo-selectos
- Examples
  - `app-foo` selects all `<app-foo></app-foo>` elements
  - `.app-foo` selects all elements with class `.app-foo`
  - `[app-foo]` selects all elements with "app-foo" as attribute


## Template

- It is **mandatory** to either have `template` or `templateUrl` into the `@Component` decorator on the component `*.component.ts` file
- When declaring a new component, you can provide an inline template as a string instead of the path to the .html file of the template

### External template
```
@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html'
})
```

### Inline template
```
@Component({
  selector: 'app-servers',
  template: '<p>This is just a dummy component</p>'
})
```

## Styling

- Styling for any component is optional, but very much recommended. To define a style, declare it into the `@Component` decorator as an array of paths (to .css files) or as an array of inline definitions

### External style(s)

```
@Component({
  selector: 'app-my-title',
  template: `
    <h1>This is my title</h1>
  `,
  styleUrls: [
    './my-title.component.css'
  ]
})
```

### Inline style(s)

```
@Component({
  selector: 'app-my-title',
  template: `
    <h1>This is my title</h1>
  `,
  styles: [`
    h1 {
      color: red;
    }
  `]
})
```
