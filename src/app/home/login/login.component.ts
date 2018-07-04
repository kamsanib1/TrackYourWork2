import { Component, OnInit, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:String;
  password:String;
  error:String;

  @Output() signup:any;
  
  constructor() { }

  ngOnInit() {
  }

  login():void{
    if(this.username==='bharat' && this.password==='bharat'){
      console.log('login success :)')
      this.error = null;
    }else{
      this.error = 'invalid login';
    }
  }

}
