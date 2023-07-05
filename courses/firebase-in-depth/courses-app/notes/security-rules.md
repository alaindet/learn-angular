# Firebase Security Rules
- Security Rules are declarative simple rules applied to Firestore and Storage that decribe constraints about read and write operations
- Rules can enforce authentication, authorization and specific conditions of the document/file they're applied on
- The syntax is concise, similar to pseudo-code
- They represent authorization constraints in a simple configuration file and automatically generate authorization logic
- Security Rules guarantee their effectiveness since they're static files then deployed on Firebase itself and not baked into the frontend application logic
- Security Rules **must be explicit** about documents and do not propagate to nested collections
- The example below shows a read-only database with courses and nested lessons collections
  ```
  service cloud.firestore {
    match /databases/{database}/documents/courses/{courseId} {
      allow read;

      match /lessons/{lessonId} {
        allow read;
      }
    }
  }
  ```

## Anatomy of a security rules file
- The security file for Firestore is named `/firestore.rules`
- The security file for Storage is named `/storage.rules`

From [https://firebase.google.com/docs/rules](https://firebase.google.com/docs/rules)
```
service <<name>> {
  match <<path>> {
    allow <<methods>> : if <<condition>>
  }
}
```

## Rule order
- If two or more rules match the same documents all conditions are checked as OR clauses, meaning if at least one rule grants access, that access is granted
- For example, if two different `match`es target the same documents with rules `allow read: if true;` and `allow read: if false;` then `allow read: if true;` is taken

## References
- https://firebase.google.com/docs/rules
- https://levelup.gitconnected.com/firebase-security-rules-everything-you-need-to-know-to-get-started-c6218bce5e69
