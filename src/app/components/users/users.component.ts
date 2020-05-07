import { Component, OnInit } from '@angular/core';
import { GenericUserService } from 'src/app/services/generic-user-service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersAsync: Observable<User[]>;
  usersByResolve: User[];

  constructor(
    public userService: GenericUserService,
    private route: ActivatedRoute

  ) {
    this.userService.addUser(new User('john', 'doe'));
    this.userService.addUser(new User('kayzer', 'soze'));

    this.usersAsync = this.userService.getUsersAsync();
    this.usersByResolve = this.route.snapshot.data['users'];
  }

  ngOnInit() {
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


  public filterByName(name: any) {

  }

}
