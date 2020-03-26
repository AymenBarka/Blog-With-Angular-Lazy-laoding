import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule, MatFormFieldModule } from '@angular/material';



@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],

  imports: [
    CommonModule, RouterModule.forChild(LoginRoutes),FormsModule,MatSliderModule,MatFormFieldModule, ReactiveFormsModule
  ]
})
export class LoginModule { }
