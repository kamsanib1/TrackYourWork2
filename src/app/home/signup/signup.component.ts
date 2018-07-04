import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstname:String;
  lastname:String;
  username:String;
  password:String;
  email:String;
  error:String;

  constructor() { }

  ngOnInit() {
  }

  signup():void{
    console.log(this.username);
    if(this.username==='bharat'){
      this.error = 'Username already exists';
    }else{
      console.log("new account created :)");
      this.error = null;
    }
  }
}
