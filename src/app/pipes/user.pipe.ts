import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(value: User, ...args: any[]): string {
    return `user: ${value.firstname} - ${value.lastname} - ${value.isAdmin} ${args[0]} ${args[1]}`;
  }

}
