import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const http='http://localhost:88';
var option = {
  headers:new HttpHeaders({'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor(private _http:HttpClient) { }

  getList(){
    return this._http.get(http+'/notices');
  }
  insertNotice(param){
    return this._http.post(http+'/notice',param,option);
  }
  get(nbNum){
    return this._http.get(http+'/notice/'+nbNum);
  }
}
