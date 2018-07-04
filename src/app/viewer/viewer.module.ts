import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module'
import { FilterViewComponent } from './filter-view/filter-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleDropdownComponent } from './simple-dropdown/simple-dropdown.component';
import { DateDropdownComponent } from './date-dropdown/date-dropdown.component';
import { ViewerComponent } from './viewer/viewer.component';
import { RouterModule } from '@angular/router';
import { QueryDetailComponent } from './query-detail/query-detail.component';
import { QueryDisplayComponent } from './query-display/query-display.component';
import { RedirectComponent } from './redirect/redirect.component';
import { EditableComponent } from './editable/editable.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    RouterModule.forChild([
      { path:'viewer', component:ViewerComponent }
    ])
  ],
  declarations: [
    FilterViewComponent, 
    SimpleDropdownComponent, 
    DateDropdownComponent, 
    ViewerComponent,
    QueryDetailComponent,
    QueryDisplayComponent,
    RedirectComponent,
    EditableComponent
  ],
  exports:[
    FilterViewComponent,
    SimpleDropdownComponent,
    DateDropdownComponent,
    QueryDetailComponent,
    QueryDisplayComponent,
    RedirectComponent,
    EditableComponent
  ]
})
export class ViewerModule { }
