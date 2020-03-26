import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyArticlesComponent } from './my-articles.component';
import { MyArticlesRoutes } from './my-articles.routes';



@NgModule({
  declarations: [MyArticlesComponent],
  exports: [MyArticlesComponent],

  imports: [
    CommonModule, RouterModule.forChild(MyArticlesRoutes)
  ]
})
export class MyArticlesModule { }
