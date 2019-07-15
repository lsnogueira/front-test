import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarService } from './services/utils';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    SnackbarService
  ]
})
export class SharedModule { }
