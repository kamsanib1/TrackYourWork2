import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path:'profile', component:ProfileComponent }
    ])
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
