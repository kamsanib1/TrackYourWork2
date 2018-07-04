import { Component, OnInit, Input } from '@angular/core';
//import {Input} from '@angular/forms'

@Component({
  selector: 'query-detail',
  templateUrl: './query-detail.component.html',
  styleUrls: ['./query-detail.component.css']
})
export class QueryDetailComponent implements OnInit {
  @Input() type:String;
  @Input() topic:String;
  @Input() tags:String[];

  constructor() { }

  ngOnInit() {
    
  }

}
