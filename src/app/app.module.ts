import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MonSuperComposantCoolComponent } from './components/mon-super-composant-cool/mon-super-composant-cool.component';
import { UsersComponent } from './components/users/users.component';
import { DoNothingDirective } from './directives/do-nothing.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MonSuperComposantCoolComponent,
    UsersComponent,
    DoNothingDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
