import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { UserComponent } from './components/user/user.component';
import { UserService } from './services/user.service';
import { ApiService } from './services/api.service';
import { GenericUserService } from './services/generic-user-service';
import { UserPipe } from './pipes/user.pipe';
import { DoNothingDirective } from './directives/do-nothing.directive';
import { UserFilterPipe } from './pipes/user-filter.pipe';
import { ZoomDirective } from './directives/zoom.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    UserComponent,
    UserPipe,
    UserFilterPipe,
    DoNothingDirective,
    ZoomDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ApiService,
    {
      provide: GenericUserService,
      useClass: UserService
    }

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
