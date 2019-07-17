import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

var $:any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:User = new User();
  constructor(private _http:HttpClient) { 
    
  }

  ngOnInit() {
   
  }

  join(){
    if(this.user.userPwd!=this.user.userPwdChk){
      alert('비밀번호와 비밀번호확인이 일치하지않습니다.');
      return;
    }
    this._http.post('http://localhost:88/user/insert',this.user).subscribe(res=>{
      console.log(res);
    })

  }
}

