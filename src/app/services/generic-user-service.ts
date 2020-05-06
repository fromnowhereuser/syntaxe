import { User } from '../models/user';
import { Injectable } from '@angular/core';



export abstract class GenericUserService {
    abstract getUsers();
    abstract deleteUser(todel: User);
    abstract addUser(firstname: string, lastname: string);
}
