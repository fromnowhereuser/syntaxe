import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  @Input('user')
  user: User;

  @Output('delete')
  delete = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

}
