import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id:string;
  pwd:string;

  constructor(private us:UserService) { }

  ngOnInit() {
  }

  doLogin(){
    var param = {
      id:this.id,
      pwd:this.pwd
    }
    this.us.post(param).subscribe(res=>{
      if(res['login']==='ok'){
          alert('로그인 성공');
        }else{
          alert('로그인 실패');
        }
    })
  }
}
