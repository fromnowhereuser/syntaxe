export class User {

  constructor(
    public firstname: string,
    public lastname: string,
    public isAdmin: boolean = false
  ) {
  }

  toggleAdmin() {
    this.isAdmin = !this.isAdmin;
  }
}
