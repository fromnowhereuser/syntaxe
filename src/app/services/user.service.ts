import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { GenericUserService } from './generic-user-service';
import { AppConfig } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration } from './generated/api/api-configuration';
import { ApiService } from './generated/api/services';
import { Observable } from 'rxjs';




@Injectable()
export class UserService extends GenericUserService {

  private url
  private users = new Array<User>();
  constructor(
    private appConfig: AppConfig,
    private http: HttpClient,
    private apiConf: ApiConfiguration,
    private api: ApiService,

  ) {
    super();

    console.log(this.http);
    
  
    // this.http.get<User[]>(this.appConfig.apiEndpoint).subscribe(users => console.log(users));

  }

  getUsers() {
    return this.users;
  }

  getUsersAsync(): Observable<User[]> {
    return this.http.get<User[]>(this.appConfig.apiEndpoint);
  }

  deleteUser(todel: User) {
    this.users.splice(this.users.indexOf(todel), 1);
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
