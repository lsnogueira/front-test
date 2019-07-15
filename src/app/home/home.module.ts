import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [HomeComponent, HomePageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class HomeModule { }
