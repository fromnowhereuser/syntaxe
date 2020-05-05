export class User {
    public isAdmin: boolean
    constructor(
        public firstname: string,
        public lastname: string,
    ) {
        this.isAdmin = false;
    }

    toggleAdmin() {
        this.isAdmin = !this.isAdmin;
    }
}
