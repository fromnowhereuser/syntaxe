import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingComponent } from '../components/landing/landing.component';
import { UsersComponent } from '../components/users/users.component';
import { ErrorComponent } from '../components/error/error.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: '**',
    component: ErrorComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class RoutingModule { }
