import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {
  @Input('content') fullContent:string;
  @Input() redirectUrl:string;

  content:string;
  sizeLimit:number = 200;
  concatString:string = '...';
  
  constructor() { }

  ngOnInit() {
    this.shrink();
  }

  redirect():void{
    console.log("redirecting to:"+this.redirectUrl);
  }
  expand(){
    this.content = this.fullContent;
  }
  shrink(){
    this.content = this.fullContent;
    if(this.fullContent.length>this.sizeLimit)
      this.content = this.fullContent.slice(0,this.sizeLimit).concat(this.concatString);
  }
}
