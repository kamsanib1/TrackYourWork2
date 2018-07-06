import { Component, OnInit } from '@angular/core';

import {QueryDetailComponent} from '../query-detail/query-detail.component';
import {QueryDisplayComponent} from '../query-display/query-display.component';
import { EditableComponent } from '../editable/editable.component'
import { RedirectComponent } from '../redirect/redirect.component'
import { FilterViewComponent } from '../filter-view/filter-view.component'
import { RecordService } from '../../services/record.service';
import { DateDropdownComponent} from '../date-dropdown/date-dropdown.component'

import { IQuery } from '../../interfaces/iquery'

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  queries:IQuery[];
  title:string = 'app';
  constructor(private recordService:RecordService) { 
    this.recordService.get().subscribe((data:IQuery[])=>{this.queries = data;console.log("data:"+data)});
  }

  ngOnInit(): void {

  }
}
