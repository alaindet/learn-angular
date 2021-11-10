# How to run Angular locally (with `npx`)

1. Install a new Angular app like this

   ```
   # Default (latest version)
   npx -p @angular/cli ng new hello-world
   ```
   or
   ```
   # Explicit latest version
   npx -p @angular/cli@latest ng new hello-world
   ```
   or
   ```
   # Specific version (ex.: 6.1.1)
   npx -p @angular/cli@6.1.1 ng new hello-world
   ```
   or use `--package` instead of `-p` to be explicit
   ```
   # Specific version (ex.: 6.1.1)
   npx --package @angular/cli@6.1.1 ng new hello-world
   ```

2. Run any command via `npx` like this
   ```
   npx ng generate component my-component
   ```

# Typical local setup

```
npx --package @angular/cli ng new hello-world
cd hello-world
npx ng serve
```

# Reference
- https://medium.com/@starikovs/how-to-use-angular-cli-locally-729dbb6707dd
