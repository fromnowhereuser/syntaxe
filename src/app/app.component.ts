import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: any;
  public tColor = 'red';
  public cssD = 'color: red';

  constructor() {
    setTimeout(() => {
      this.title = {
        caption: 'Hello From SetTimeout'
      }
    }, 0);
  };

  public handleButtonClick() {
    console.log('clicked !');
  }

  public handleChangeColor(elem: HTMLInputElement) {
    console.log(elem.value);
    this.tColor = elem.value;
  }

}
