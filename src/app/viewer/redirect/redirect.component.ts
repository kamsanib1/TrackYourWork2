import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {
  @Input() content:String;
  @Input() redirectUrl:String;

  constructor() { }

  ngOnInit() {
  }

  redirect():void{
    console.log("redirecting to:"+this.redirectUrl);
  }
}
