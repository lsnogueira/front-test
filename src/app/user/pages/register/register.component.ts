import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../../shared/services';
import { Router } from '@angular/router';
import { SnackbarService } from '../../../shared/services/utils';
import { User } from '../../../shared/models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../../../assets/scss/pages/_register.component.scss']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;
  submitted: boolean;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private sbService: SnackbarService
  ) {}

  ngOnInit() {
    this.createForm();
    this.submitted = false;
  }

  createForm(): void {
    this.formRegister = new FormGroup({
      name: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      tel: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
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

    console.log(body);

    this.apiService
      .registerUser(body)
      .then(res => {
        this.router.navigate(['/home']);
      })
      .catch(rej => {
        console.log('deu ruim', rej);
        this.sbService.open('Não foi possível concluir o cadastro');
        this.submitted = false;
      });
  }
}
