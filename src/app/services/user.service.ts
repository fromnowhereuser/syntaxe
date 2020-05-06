import { User } from '../models/user';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { GenericUserService } from './generic-user-service';

@Injectable()
export class UserService extends GenericUserService {
  private users = new Array<User>();
  constructor(
    api: ApiService
  ) {
    super();
  }

  getUsers() {
    return this.users;
  }

  deleteUser(todel: User) {
    this.users.splice(this.users.indexOf(todel), 1);
  }

  addUser(firstname: string, lastname: string) {
    //const user = {} as User;
    const user = new User('', '');

    user.firstname = firstname;
    user.lastname = lastname;

    this.users.push(user);
  }

}
