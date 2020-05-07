import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingComponent } from '../components/landing/landing.component';
import { UsersComponent } from '../components/users/users.component';
import { ErrorComponent } from '../components/error/error.component';
import { AuthGuard } from '../guards/auth.guard';
import { AuthComponent } from '../components/auth/auth.component';
import { UsersResolverService } from '../resolvers/users-resolver.service';
import { UserDetailsComponent } from '../components/user-details/user-details.component';


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
    component: UsersComponent,
    resolve: {
      users: UsersResolverService
    },
    canActivate: [AuthGuard],
    children: [
      {
        path: ':id',
        component: UserDetailsComponent,
        resolve: {
          // user: UserResolverService
        }
      }
    ],
  },
  {
    path: 'auth',
    component: AuthComponent
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
