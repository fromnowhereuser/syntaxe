import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import {plainToClass} from "class-transformer";

@Component({
  selector: 'app-user-form-by-template',
  templateUrl: './user-form-by-template.component.html',
  styleUrls: ['./user-form-by-template.component.scss']
})
export class UserFormByTemplateComponent implements OnInit {

  @Output('newuser')
  newuser = new EventEmitter<User>();

  user = new User('', '');

  constructor() { }

  ngOnInit() {
  }

  valid(data: any) {
    const nuser = new User('', '');
    Object.assign(nuser, this.user);
    this.newuser.emit(nuser);

  }

}
