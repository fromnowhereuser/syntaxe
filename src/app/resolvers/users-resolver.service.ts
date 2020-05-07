import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { GenericUserService } from '../services/generic-user-service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolverService implements Resolve<User[]>{

  constructor(
    private userService: GenericUserService
  ) { }
  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): User[] | Observable<User[]> | Promise<User[]> {
    return this.userService.getUsersAsync();
  }
}
