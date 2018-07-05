import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryComponent } from './query/query.component';
import { RouterModule } from '@angular/router';
import { SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path:'query',component:QueryComponent}
    ])
  ],
  declarations: [
    QueryComponent
  ]
})
export class QueryModule { }
