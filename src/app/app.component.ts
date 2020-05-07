import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service';
import { GenericUserService } from './services/generic-user-service';
import { JsonplaceholderService } from './services/jsonplaceholder.service';
import { of, from, Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = undefined;


  constructor(
  ) {
    // of([1, 2, 3]).subscribe(x => console.log(x));
    // from([1, 2, 3]).subscribe(x => console.log(x));
  }

  ngOnInit(): void {



  }




}
