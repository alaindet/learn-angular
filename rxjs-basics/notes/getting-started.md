# Getting started

- Observables are stream of values
- At any moment, an Observable can trigger an event
- Event types are **next**, **error** and **complete**
- Error and complete events truncate the stream, while next events push new values and keep the stream going
- Observables are **cold** by default and only trigger when at least one *observer* is registered
- Each Observable can emit 0+ values
- Observables can deliver values both synchronously or asynchronously
- Observables can be cancelled once no subscriber remains
