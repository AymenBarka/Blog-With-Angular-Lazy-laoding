import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllArticlesComponent } from './all-articles.component';
import { RouterModule } from '@angular/router';
import { AllArticlesRoutes } from './all-articles.routes';



@NgModule({
  declarations: [AllArticlesComponent],
  exports: [AllArticlesComponent],

  imports: [
    CommonModule, RouterModule.forChild(AllArticlesRoutes)
  ]
})
export class AllArticlesModule { }
