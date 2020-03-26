import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileRoutes } from './profile.routes';
import { ProfileComponent } from './profile.component';



@NgModule({
  declarations: [ProfileComponent],
  exports: [ProfileComponent],

  imports: [
    CommonModule, RouterModule.forChild(ProfileRoutes)
  ]
})
export class ProfileModule { }
