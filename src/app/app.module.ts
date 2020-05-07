import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { UserComponent } from './components/user/user.component';
import { UserService } from './services/user.service';
import { GenericUserService } from './services/generic-user-service';
import { UserPipe } from './pipes/user.pipe';
import { DoNothingDirective } from './directives/do-nothing.directive';
import { UserFilterPipe } from './pipes/user-filter.pipe';
import { ZoomDirective } from './directives/zoom.directive';
import { AppConfig, CONFIG1 } from './app.config';
import { UserFormByCodeComponent } from './components/forms/user-form-by-code/user-form-by-code.component';
import { UserFormByTemplateComponent } from './components/forms/user-form-by-template/user-form-by-template.component';
import { ApiConfiguration } from './services/generated/api/api-configuration';
import { ApiService } from './services/generated/api/services';
import { LandingComponent } from './components/landing/landing.component';
import { ErrorComponent } from './components/error/error.component';
import { UsersComponent } from './components/users/users.component';
import { RoutingModule } from './routing/routing.module';
import { NavComponent } from './components/nav/nav.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthDirective } from './services/auth.directive';
import { UserDetailsComponent } from './components/user-details/user-details.component';

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
    UserFormByTemplateComponent,
    LandingComponent,
    ErrorComponent,
    UsersComponent,
    NavComponent,
    AuthComponent,
    AuthDirective,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
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
        HttpClient,
        ApiService,
        ApiConfiguration
      ],
      useFactory: (
        appConfig: AppConfig,
        http: HttpClient,
        apiConf: ApiConfiguration,
        api: ApiService
      ) => {
        if (appConfig.mode === 1) {
          return new UserService(appConfig, http, apiConf, api);
        }
      }
    },

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
