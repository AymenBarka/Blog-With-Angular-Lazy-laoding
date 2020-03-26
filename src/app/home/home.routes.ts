import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { MyArticlesComponent } from './my-articles/my-articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { PermissionGuard } from '../permission.guard';
import { LoginComponent } from './login/login.component';


export const HomeRoutes: Route[] = [
    {
      path: '',
      component: HomeComponent,
      children: [
        {path:"register",
        loadChildren:()=> import ('./register/register.module').then ( m =>
         m.RegisterModule )
      },
         {path:"login",
         loadChildren:'./login/login.module#LoginModule',
        },

         {path:"profile", canActivate :[PermissionGuard],
         loadChildren:()=> import ('./profile/profile.module').then ( m =>
          m.ProfileModule ) 
               },

         {path: "my-articles", canActivate :[PermissionGuard],
         loadChildren:()=> import ('./my-articles/my-articles.module').then ( m =>
          m.MyArticlesModule )        
        },

         {path:"add-article", canActivate :[PermissionGuard],
         loadChildren:()=> import ('./add-article/add-article.module').then ( m =>
          m.AddArticleModule )
        },

         {path:"all-articles", canActivate :[PermissionGuard],
         loadChildren:()=> import ('./all-Articles/all-articles.module').then ( m =>
          m.AllArticlesModule )  
              },

         {path: "detail-article/:index", canActivate :[PermissionGuard],
         loadChildren:()=> import ('./detail-article/detail-article.module').then ( m =>
          m.DetailArticleModule )  
              },
              
         {path:"update-article/:index",canActivate :[PermissionGuard],
         loadChildren:()=> import ('./update-article/update-article.module').then ( m =>
          m.UpdateArticleModule )        },
      ]
    }
  ];
  