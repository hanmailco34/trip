import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reply } from './reply';


const BASE_URL = 'http://localhost:88';
@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  
  constructor(private _http:HttpClient) { }

  getReply(reply:Reply){
    var url = BASE_URL + '/replybyboard';
    return this._http.post(url, reply);
  }

  writeReply(reply:Reply){
    var url = BASE_URL + '/reply';
    return this._http.post(url, reply);
  }

  getCompanyByNum(CompanyNum){
    var url = BASE_URL + '/with?withNum='+CompanyNum;
    return this._http.get(url);
  }



}
