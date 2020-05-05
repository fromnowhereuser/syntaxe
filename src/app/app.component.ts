import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = undefined;

  public choice = 10;

  public users = new Array<User>();

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.title = { caption: 'syntaxe' };
    }, 1000);

    this.users.push(new User('john', 'doe'));
    this.users.push(new User('kayzer', 'soze'));
  }


  public onClick(): void {
    console.log('clicked');
  }

  showUser(user: any) {
    console.log(user);
  }

  addUser(firstname: string, lastname: string) {
    //const user = {} as User;
    const user = new User('','');

    user.firstname = firstname;
    user.lastname = lastname;

    this.users.push(user);
  }

}
