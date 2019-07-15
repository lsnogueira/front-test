import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService, SnackbarService, AuthService } from '../../../shared/services';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserCredentials } from '../../../shared/models';
import { ErrorMessages } from '../../../shared/enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../../assets/scss/pages/_login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  formLogin: FormGroup;
  submitted: boolean;
  private subscription = new Subscription();

  constructor(
    private sbService: SnackbarService,
    private apiService: ApiService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.submitted = false;
    this.changeBackground();
    this.createForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  createForm(): void {
    this.formLogin = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  get form() {
    return this.formLogin.controls;
  }

  goLogin(): void {
    if (this.formLogin.invalid) {
      return;
    }
    this.submitted = true;
    const body: UserCredentials = {
      email: this.form.login.value,
      senha: this.form.password.value
    };

    this.subscription.add(
      this.apiService.requestToken(body).subscribe(
        res => {
          this.authService.saveSession(res);
          this.router.navigate(['/home']);
        },
        rej => {
          this.submitted = false;
          if (rej.status === 400) {
            this.sbService.open(ErrorMessages.LOGIN_NOT_FOUND_ERROR);
          } else {
            this.sbService.open(ErrorMessages.UNEXPECTED_ERROR);
          }
        }
      )
    );
  }

  private changeBackground(): void {
    if (document.body.classList.contains('bg-home')) {
      document.body.classList.replace('bg-home', 'bg-user');
    } else {
      document.body.classList.add('bg-user');
    }
  }
}
