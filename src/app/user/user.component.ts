import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['../../assets/scss/components/_user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.classList.add('bg-user');
  }

}
