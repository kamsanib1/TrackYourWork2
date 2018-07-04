import { Component, OnInit, Output, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() key:String;
  @Input() value:String;
  @Input() string:boolean;
  test:String;
  constructor() { }

  ngOnInit() {
    if(this.string === undefined){
      this.string = true;
    }
    
    console.log(this.key+" string:"+this.string);
  }

}
