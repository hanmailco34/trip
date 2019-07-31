import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const url  = "http://localhost:88/";
@Injectable({
  providedIn: 'root'
})
export class HotelService {
  
  constructor(private _http:HttpClient) { }

  get(str,destination){
    return this._http.get(url+str+destination);
  }
}
