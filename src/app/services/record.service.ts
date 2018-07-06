import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IQuery } from '../interfaces/iquery';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  recordsURL:string = 'http://localhost:4200/assets/records.json';

  constructor(private _http:HttpClient) { 
  }

  get(){
    return     this._http.get<IQuery[]>(this.recordsURL);
  }
}
