import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, ElementRef } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {


  @Input('user')
  user: User;

  @Output('delete')
  delete = new EventEmitter<User>()

  constructor(
    private ref: ElementRef,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

  }

  showDetails() {
    this.router.navigate(['./', this.user.firstname], { relativeTo: this.activatedRoute });
  }

}
