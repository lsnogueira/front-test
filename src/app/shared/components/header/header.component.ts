import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services';
import { HomeComponent } from '../../../home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../../assets/scss/components/_header.component.scss']
})
export class HeaderComponent implements OnInit {
  isHome: boolean;
  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isHome = this.activatedRoute.snapshot.component === HomeComponent;
  }

  logout() {
    this.authService.closeSession('user');
    this.router.navigate(['/home']);
  }
}
