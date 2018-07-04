import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'simple-dropdown',
  templateUrl: './simple-dropdown.component.html',
  styleUrls: ['./simple-dropdown.component.css']
})
export class SimpleDropdownComponent implements OnInit {
  @Input() title:String;
  dropList:String[];
  @Input() type:String;
  switch:boolean;
  selection:String;

  constructor() { }

  ngOnInit() {
    if(this.type==='view')
      this.dropList = ['date','month','year'];
    else if(this.type==='orderby'){
      this.dropList = ['asc','dsc'];
    }
    this.selection = this.dropList[0];
  }

  update(item:String):void{
    this.selection = item;
    this.switch = false;
  }
}
