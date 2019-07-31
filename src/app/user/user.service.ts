import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { User } from './user';


const httpFile = {
  headers: new HttpHeaders(
    {'ENCTYPE':'multipart/form-data'}
  )
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  get(url,param?){
    return this.http.get(url,param);
  }

  post(param:any){
    return this.http.post('http://localhost:88/login',param);
  }
  postCheck(param:any){
    return this.http.post("http://localhost:88/userCheck",param);
  }
  update(param:any){
    return this.http.put('http://localhost:88/user',param);
  }
  insertFile(obj){
    const formData = new FormData();
    for(var key in obj) {
      formData.append(key,obj[key]);
    }
    return formData;
  }
  insert(param:any){
    const data = this.insertFile(param);
    console.log(data);
    return this.http.post('http://localhost:88/users',data,httpFile);
  }
  delete(param:any){
    return this.http.post('http://localhost:88/userDelete',param);
  }
}
