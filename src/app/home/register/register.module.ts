import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { RegisterRoutes } from './register.routes';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatSliderModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from 'ng2-ckeditor';



@NgModule({
  declarations: [RegisterComponent],
  exports: [RegisterComponent],

  imports: [
    CommonModule, RouterModule.forChild(RegisterRoutes),FormsModule,CKEditorModule,MatInputModule,MatSliderModule,MatFormFieldModule, ReactiveFormsModule
  ]
})
export class RegisterModule { }
