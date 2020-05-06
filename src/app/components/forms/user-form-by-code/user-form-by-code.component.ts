import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form-by-code',
  templateUrl: './user-form-by-code.component.html',
  styleUrls: ['./user-form-by-code.component.scss']
})
export class UserFormByCodeComponent implements OnInit {

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
    console.log(this.userForm.valid);
    console.log(this.userForm.value);
  }

}
