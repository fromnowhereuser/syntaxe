import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { plainToClass } from 'class-transformer';

@Component({
  selector: 'app-user-form-by-code',
  templateUrl: './user-form-by-code.component.html',
  styleUrls: ['./user-form-by-code.component.scss']
})
export class UserFormByCodeComponent implements OnInit {


  @Output('newuser')
  newuser = new EventEmitter<User>();

  userForm: FormGroup;

  firstnameCtrl: FormControl;
  lastnameCtrl: FormControl;

  constructor(
    fb: FormBuilder
  ) {

    this.firstnameCtrl = fb.control('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(10),
    ]);

    this.lastnameCtrl = fb.control('');

    this.userForm = fb.group({
      firstname: this.firstnameCtrl,
      lastname: this.lastnameCtrl,
    });
  }

  ngOnInit() {
  }

  valid() {
    const nuser = plainToClass(User, this.userForm.value);
    this.newuser.emit(nuser);
  }

}

// http://91.121.148.187:3002/messenger