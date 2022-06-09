import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiSerivce: ApiService,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.getFormGroup()
  }

  private getFormGroup() {
    const formGroup = this.formBuilder.group({
      edtCadUserEmail: [{value: undefined, disabled: false}, Validators.compose([Validators.required])],
      edtCadUserName: [{value: undefined, disabled: false}, Validators.compose([Validators.required])],
      edtCadUserCPF: [{value: undefined, disabled: false}, Validators.compose([Validators.required])],
      edtCadUserBirth: [{value: undefined, disabled: false}, Validators.compose([Validators.required])],
      edtCadUserPassword: [{value: undefined, disabled: false}, Validators.compose([Validators.required])],
    })
    return formGroup;
  }

  public onSave() {
    console.log(this.formGroup.getRawValue());
    const value = this.formGroup.getRawValue();
    this.apiSerivce.cadastroPaciente(value)
  }


}
