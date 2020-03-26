import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { LoginComponent } from './login/login.component';
import { MyArticlesComponent } from './my-articles/my-articles.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { MatInputModule, MatSliderModule, MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../components/components.module';
import { PermissionGuard } from '../permission.guard';



@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],

  imports: [
    CommonModule,RouterModule,FormsModule,CKEditorModule,MatInputModule,BrowserAnimationsModule,MatSliderModule,MatFormFieldModule, ReactiveFormsModule,ComponentsModule
    
  
  ],
  providers: [PermissionGuard, LoginComponent],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
