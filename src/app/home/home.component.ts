import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['../../assets/scss/components/_home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
