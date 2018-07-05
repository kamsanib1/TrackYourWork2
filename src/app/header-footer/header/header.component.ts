import { Component, OnInit, Injectable } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
@Injectable()
export class HeaderComponent implements OnInit {

  private HOME:string = 'home'; 
  private VIEWER:string = 'viewer';
  private QUERY:string = 'query';
  private PROFILE:string = 'profile';

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  public redirect(page){
    let url:String;
    if(page.toLowerCase()==this.HOME){
      url = this.HOME;
    }else if(page.toLowerCase() == this.VIEWER){
      url = this.VIEWER;
    }else if(page.toLowerCase() == this.QUERY){
      url = this.QUERY;
    }else if(page.toLowerCase()==this.PROFILE){
      url = this.PROFILE;
    }

    this._router.navigate([url]);
  }

}
