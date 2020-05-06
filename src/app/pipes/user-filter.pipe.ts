import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'userFilter',
  pure: false
})
export class UserFilterPipe implements PipeTransform {

  transform(value: User[], ...args: any[]): User[] {

    if (!args[0]) {
      return value;
    }

    return value.filter(user => user.firstname === args[0]);
  }

}
