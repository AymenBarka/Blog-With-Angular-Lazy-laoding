import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailArticleComponent } from './detail-article.component';
import { RouterModule } from '@angular/router';
import { DetailArticleRoutes } from './detailArticle.routes';



@NgModule({
  declarations: [DetailArticleComponent],
  exports: [DetailArticleComponent],

  imports: [
    CommonModule, RouterModule.forChild(DetailArticleRoutes)
  ]
})
export class DetailArticleModule { }
