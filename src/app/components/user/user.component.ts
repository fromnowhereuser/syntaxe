import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user: User = new User('', '');

  @Output()
  userSelect = new EventEmitter<User>();

  constructor() { }

  handlebuttonSelect() {
    this.userSelect.emit(this.user);
  }

  ngOnInit(): void {
  }

}
