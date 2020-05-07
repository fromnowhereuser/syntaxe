import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



export abstract class GenericUserService {
    abstract getUsersAsync(): Observable<User[]>;
    abstract getUsers(): User[];
    abstract deleteUser(todel: User);
    abstract addUser(user: User);
}
