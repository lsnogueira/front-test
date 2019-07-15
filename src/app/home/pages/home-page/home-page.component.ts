import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['../../../../assets/scss/pages/_home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.changeBackground();

    if (!this.authService.checkSession('user')) {
      this.router.navigate(['/login']);
    }
  }

  private changeBackground(): void {
    if (document.body.classList.contains('bg-user')) {
      document.body.classList.replace('bg-user', 'bg-home');
    } else {
      document.body.classList.add('bg-home');
    }
  }
}
