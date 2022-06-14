import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicialComponent } from './inicial/inicial.component';
import {ButtonModule} from "primeng/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CadastroComponent } from './cadastro/cadastro.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicialComponent,
    CadastroComponent
  ],
    imports: [
        BrowserModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
