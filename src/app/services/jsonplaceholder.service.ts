import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { filter, switchMap } from 'rxjs/operators';


interface user {
  name: string,
  username: string,
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
    this.http.get<user[]>(this.url)
      .pipe(
        switchMap(users => users),
        filter(user => user.name.includes('a'))
      )
      .subscribe(data => console.log(data));
    //this.http.get(this.url).toPromise().then(data => console.log(data));
  }
}
