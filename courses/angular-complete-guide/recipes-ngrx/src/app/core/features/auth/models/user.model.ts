export class User {
  constructor(
    public email: string,
    public token: string,
  ) {}

  // Instantiate a new User from a plain object
  static deserialize(arg: {
    email: string,
    token: string,
  }): User {
    return new User(
      arg.email,
      arg.token,
    );
  }
}
