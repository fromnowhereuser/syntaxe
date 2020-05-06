import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { AppConfig, CONFIG1 } from './app.config';
import { UserFormByCodeComponent } from './components/forms/user-form-by-code/user-form-by-code.component';
import { UserFormByTemplateComponent } from './components/forms/user-form-by-template/user-form-by-template.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    UserComponent,
    UserPipe,
    UserFilterPipe,
    DoNothingDirective,
    ZoomDirective,
    UserFormByCodeComponent,
    UserFormByTemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService,
    // {
    //   provide: GenericUserService,
    //   useClass: UserService
    // },
    {
      provide: AppConfig,
      useValue: CONFIG1
    },
    {
      provide: GenericUserService,
      deps: [
        AppConfig,
        ApiService
      ],
      useFactory: (
        appConfig: AppConfig,
        api: ApiService
      ) => {
        if (appConfig.mode === 1) {
          return new UserService(api);
        }
      }
    },

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
