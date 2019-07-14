import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['../../assets/scss/components/_user.component.scss']
})
export class UserComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.body.classList.add('bg-user');
  }
}
