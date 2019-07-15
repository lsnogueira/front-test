import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService, AuthService } from '../../../shared/services';
import { Router } from '@angular/router';
import { SnackbarService } from '../../../shared/services/utils';
import { User, UserCredentials } from '../../../shared/models';
import { ErrorMessages } from '../../../shared/enum';
import { Subscription } from 'rxjs';
import { slideStateTrigger } from '../../../shared/animations/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../../../assets/scss/pages/_register.component.scss'],
  animations: [slideStateTrigger]
})
export class RegisterComponent implements OnInit, OnDestroy {
  formRegister: FormGroup;
  submitted: boolean;
  private subscription = new Subscription();

  constructor(
    private apiService: ApiService,
    private router: Router,
    private sbService: SnackbarService,
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
    this.formRegister = new FormGroup({
      name: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      tel: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      cep: new FormControl('', Validators.required),
      addressPlace: new FormControl('', Validators.required),
      addressNumber: new FormControl('', Validators.required),
      neighborhood: new FormControl('', Validators.required)
    });
  }

  get form() {
    return this.formRegister.controls;
  }

  goRegister(): void {
    this.submitted = true;
    if (this.formRegister.invalid) {
      return;
    }

    const body: User = {
      nome: this.form.name.value,
      cpf: this.form.cpf.value,
      email: this.form.email.value,
      senha: this.form.password.value,
      cep: this.form.cep.value,
      logradouro: this.form.addressPlace.value,
      numero: this.form.addressNumber.value,
      bairro: this.form.neighborhood.value,
      telefone: this.form.tel.value.replace(/[^0-9]+/g, '')
    };

    this.apiService
      .registerUser(body)
      .then(res => {
        this.loginUser(res.email, res.senha);
      })
      .catch(() => {
        this.sbService.open(ErrorMessages.REGISTER_ERROR);
        this.submitted = false;
      });
  }

  private loginUser(email: string, senha: string): void {
    const body: UserCredentials = {
      email,
      senha
    };

    this.subscription.add(
      this.apiService.requestToken(body)
        .subscribe(
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

  showPassword() {
    const inputPassword = document.getElementById('password') as HTMLInputElement;
    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
    } else {
      inputPassword.type = 'password';
    }
  }
}
