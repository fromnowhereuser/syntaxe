import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service';
import { GenericUserService } from './services/generic-user-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = undefined;

  public choice = 10;
  date = new Date();

  constructor(
    public userService: GenericUserService
  ) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.title = { caption: 'syntaxe' };
    }, 1000);

    this.userService.addUser('john', 'doe');
    this.userService.addUser('kayzer', 'soze');
  }


  public onClick(): void {
    console.log('clicked');
  }

  showUser(user: any) {
    console.log(user);
  }


  onMouseMove(event: MouseEvent) {
    console.log(event);

  }

}
