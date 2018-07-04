import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QueryComponent } from '../query/query/query.component';
import {ProfileComponent} from '../profile/profile/profile.component';
import {ViewerComponent} from '../viewer/viewer/viewer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'query',component:QueryComponent},
      {path:'profile',component:ProfileComponent},
      {path:'viewer',component:ViewerComponent},
    ])
  ],
  declarations: []
})
export class RoutingModule { }
