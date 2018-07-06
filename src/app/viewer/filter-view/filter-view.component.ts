import { Component, OnInit, Input } from '@angular/core';
import {IfilterChoices} from '../../interfaces/ifilter-choices'

@Component({
  selector: 'filter-view',
  templateUrl: './filter-view.component.html',
  styleUrls: ['./filter-view.component.css']
})
export class FilterViewComponent implements OnInit {
  title:string;
  filterChoices:IfilterChoices[];
  displayChoices:IfilterChoices[];
  limited:boolean;
  limitText:string;
  @Input() type:string;

  constructor() { }

  ngOnInit() {
    this.filterChoices = [];
    if(this.type.toLocaleLowerCase()=='tags'){
      this.title = 'Tags';
      this.filterChoices = [
        {'choice':'easy','isChecked':false},
        {'choice':'algebra','isChecked':false},
        {'choice':'kinematics','isChecked':false},
        {'choice':'poems','isChecked':false},
      ]
    }
    else if(this.type.toLocaleLowerCase()=='topics'){
      this.title = 'Topics';
      this.filterChoices = [
        {'choice':'Maths','isChecked':false},
        {'choice':'Telugu','isChecked':false},
//        {'choice':'Science','isChecked':false},
      ]
    }
    this.limited = true;
    this.setDisplayChoices();
  }

  toggleLimited():void{
    this.limited = !this.limited;
    this.setDisplayChoices();
  }

  setDisplayChoices():void{
    this.displayChoices = this.filterChoices.slice(0,3);
    this.limitText = 'see more '+this.title.toLocaleLowerCase();
    if(!this.limited){
      this.displayChoices = this.filterChoices;
      this.limitText = 'see less '+this.title.toLocaleLowerCase();
    }
    if(this.filterChoices.length<=3){
      for(let i=0;i<3-this.displayChoices.length;i++)
        this.displayChoices.push(undefined);
      this.limitText = undefined;
    }
  }

  toggleCheckBox(choice:IfilterChoices,index:number):void{
    this.filterChoices.forEach((chc,idx)=>{
      if(idx===index)
        chc.isChecked = !chc.isChecked;
      
    });
  }
}
