export class User {
  constructor(
    public email: string,
    public token: string,
  ) {}

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
