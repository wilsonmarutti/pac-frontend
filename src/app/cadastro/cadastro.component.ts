import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.getFormGroup()
  }

  private getFormGroup() {
    const formGroup = this.formBuilder.group({
      email: [{value: undefined, disabled: false}, Validators.compose([Validators.required])],
      nome: [{value: undefined, disabled: false}, Validators.compose([Validators.required])],
      cpf: [{value: undefined, disabled: false}, Validators.compose([Validators.required])],
      dataNascimento: [{value: undefined, disabled: false}, Validators.compose([Validators.required])],
      senha: [{value: undefined, disabled: false}, Validators.compose([Validators.required])],
      confirmaSenha: [{value: undefined, disabled: false}, Validators.compose([Validators.required])],
    })
    return formGroup;
  }

  public onSave() {
    console.log(this.formGroup.getRawValue())
  }


}
