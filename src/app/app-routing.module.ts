import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecordService } from './services/record.service';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers:[
    RecordService
  ],
  exports: [
    HttpClientModule,
    RouterModule
  ]
})
export class AppRoutingModule { }
