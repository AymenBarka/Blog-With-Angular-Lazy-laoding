import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UpdateArticleComponent } from './update-article.component';
import { UpdateArticleRoutes } from './update-article.routes';



@NgModule({
  declarations: [UpdateArticleComponent],
  exports: [UpdateArticleComponent],

  imports: [
    CommonModule, RouterModule.forChild(UpdateArticleRoutes)
  ]
})
export class UpdateArticleModule { }
