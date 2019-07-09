import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get('https://naver.com');
  }

  post(param:any){
    return this.http.post('http://localhost/login',param);
  }
}
