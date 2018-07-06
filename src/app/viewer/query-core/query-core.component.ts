import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { QueryDetailComponent } from '../query-detail/query-detail.component';
import { QueryDisplayComponent } from '../query-display/query-display.component';
import { RedirectComponent } from '../redirect/redirect.component';

import {IQuery} from '../../interfaces/iquery'

@Component({
  selector: 'query-core',
  templateUrl: './query-core.component.html',
  styleUrls: ['./query-core.component.css']
})
export class QueryCoreComponent implements OnInit {

  @Input() query:IQuery = null;
  expandFlag:boolean = false;

  @ViewChild(RedirectComponent) redirectComponent:RedirectComponent;

  constructor() { }

  ngOnInit() {
    if(this.query == null)this.query={
      'query':'The reversal was complete with the availability of version 1.1 beta on 6 March 1995, in which a press release states that the final 1.1 release would be available at no cost only for academic and non-profit organizational use. Gone was the notion expressed in the first press release that Navigator would be freely available in the spirit of Internet software.',
      'type' :'question',
      'topic':'Maths',
      'tags' :[
                'hindi','poems','algebra','easy'
              ],
      'solutions':[]
    }
  }

  toggleExpand(){
    this.expandFlag = !this.expandFlag;
    if(this.expandFlag)
    this.redirectComponent.expand();
    else
    this.redirectComponent.shrink();
  }
}
