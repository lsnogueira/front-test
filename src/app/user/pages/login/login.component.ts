import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SnackbarService } from '../../../shared/services/utils';
import { ApiService } from '../../../shared/services';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../../assets/scss/pages/_login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  formLogin: FormGroup;
  private subscription = new Subscription();

  constructor(
    private sbService: SnackbarService,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
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

    const body = {
      email: this.form.login.value,
      senha: this.form.password.value
    };

    this.subscription.add(
      this.apiService.loginUser(body)
        .subscribe(
          res => {
            console.log('usuario logado', res);
            this.router.navigate(['/home']);
          },
          rej => {
            console.log('deu ruim', rej);
          }
        )
    );

  }
}
