export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date,
  ) {}

  get token(): string | null {
    const now = new Date();
    const expDate = this._tokenExpirationDate ?? now;
    return now > expDate ? this._token : null;;
  }
}
