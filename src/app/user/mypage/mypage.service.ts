import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:88';

@Injectable({
  providedIn: 'root'
})
export class MypageService {

  constructor(private _http:HttpClient) { }
  
  getPlan(userNum){
  var url = BASE_URL +'/planUser/'+userNum;
    return this._http.get(url);
  }
  getWIth(userNum){
    var url = BASE_URL +'/with/'+userNum;
    return this._http.get(url);
  }
  getTip(userNum){
    var url = BASE_URL +'/tip/'+userNum;
    return this._http.get(url);
  }
  getreview(userNum){
    var url = BASE_URL +'/review/'+userNum;
    return this._http.get(url);
  }
}