import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { LoginComponent, RegisterComponent } from './pages';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'cadastro', component: RegisterComponent },
      { path: '', redirectTo: 'login' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
