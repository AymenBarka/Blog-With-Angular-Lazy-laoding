import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule, MatInputModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './components/footer/footer.component';
import { PermissionGuard } from './permission.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { HomeModule } from './home/home.module';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HomeModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes)

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [PermissionGuard, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
