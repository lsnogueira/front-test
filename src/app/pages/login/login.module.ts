import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginFieldComponent } from './login-field/login-field.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFieldComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class LoginModule { }
