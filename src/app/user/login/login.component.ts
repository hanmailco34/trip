import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = new User();
  google_url:string;
  naver_url:string;

  constructor(private us:UserService,
    private route: ActivatedRoute,
    private _router:Router) {
   }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      var param = JSON.parse(params.snsUser);
      if(param.userNum==null){
        var snsId;
        alert('처음에 회원가입은 필수입니다. 두번째부터 안하셔도 됩니다.');
        if(param.naverId){          
          snsId = 'n'+param.naverId+"&"+param.naverEmail;
        } else if(param.googleId){
          snsId = 'g'+param.googleId+"&"+param.googleEmail;
        }
        this._router.navigate(['signup/'+snsId]);
      } else{
        localStorage.setItem("userNum",param.userNum);
        localStorage.setItem("userNick",param.userNick);
        localStorage.setItem("userLevel",param.userLevel);
        location.href="/";
      }
    });
    var url = 'http://localhost:88/login';
    this.us.get(url).subscribe(res=>{   
      this.google_url=res['google_url'];
      this.naver_url=res['naver_url'];
    })
  }
  doLogin(){
    this.us.post(this.user).subscribe(res=>{
      if(res){
        var result={};
        for(var key in res){
           result[key] = res[key];        
          }
        console.log(result);
          localStorage.setItem('userNum',result['userNum']);
          localStorage.setItem('userNick', result['userNick']);
          localStorage.setItem('userLevel',result['userLevel']);      
         alert('로그인 성공');
          location.href='/';
        }else{
          alert('로그인 실패');
        }
    })
  }
}
