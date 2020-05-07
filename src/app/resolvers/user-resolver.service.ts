import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from '../models/user';
import { GenericUserService } from '../services/generic-user-service';
import { Observable } from 'rxjs';
import { switchMap, find } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<User>{

  constructor(
    private userService: GenericUserService
  ) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): User | Observable<User> | Promise<User> {
    console.log(route.paramMap.get('id'));

    return this.userService
      .getUsersAsync()
      .pipe(
        switchMap(users => users),
        find(user => user.firstname === route.paramMap.get('id'))
      );
  }
}