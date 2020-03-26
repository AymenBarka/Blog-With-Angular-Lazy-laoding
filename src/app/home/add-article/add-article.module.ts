import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddArticleComponent } from './add-article.component';
import { RouterModule } from '@angular/router';
import { AddArticleRoutes } from './add-article.routes';



@NgModule({
  declarations: [AddArticleComponent],
  exports: [AddArticleComponent],

  imports: [
    CommonModule, RouterModule.forChild(AddArticleRoutes)
  ]
})
export class AddArticleModule { }
