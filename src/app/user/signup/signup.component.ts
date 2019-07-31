import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';

var $:any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:User = new User();
  snsId:string;
  snsToggle:string;
  separators:number;
  constructor(private _http:HttpClient,private router:ActivatedRoute) {
    this.snsId = this.router.snapshot.params['snsId'];
    this.snsToggle = this.snsId.substr(0,1)   
    if(this.snsId=='notSnsId'){
      this.snsId=null;
    } else if(this.snsToggle=='n'){
      this.separators = this.snsId.indexOf("&");
      this.user.naverId= this.snsId.substr(1,this.separators-1);
      this.user.naverEmail = this.snsId.substr(this.separators+1);
    } else {
      this.separators = this.snsId.indexOf("&");
      this.user.googleId= this.snsId.substr(1,this.separators-1);
      this.user.googleEmail = this.snsId.substr(this.separators+1);
    }
  }

  ngOnInit() {
  }
  idchk(){
     if(this.user.userId.length<5){
       document.querySelector('#idchkres').innerHTML = '글자수가 4글자 이하입니다.';
       return;
     }
     if(this.user.userId.length>=5){
      document.querySelector('#idchkres').innerHTML = '아이디로 사용하기 적합합니다.';
    return true; 
    }

  }
  pwdchk(){
    if(this.user.userPwd.length<5){
      document.querySelector('#pwdchkres').innerHTML = '비밀번호가 4글자 이하입니다.';
      return;
    }
    if(this.user.userId.length>=5){
      document.querySelector('#pwdchkres').innerHTML = '비밀번호로 사용하기 적합합니다.';
      return true;
     }
  }
  pwdcorchk(){
    if(this.user.userPwd!=this.user.userPwdChk){
      document.querySelector('#pwdcorchkres').innerHTML = '비밀번호와 일치하지 않습니다.';
      return;
    }
    if(this.user.userPwd==this.user.userPwdChk){
      document.querySelector('#pwdcorchkres').innerHTML = '비밀번호와 일치합니다.';
      return true;
  }
}
emailchk(){
  var i = 0;
  var cnt = 0;
  var dcnt = 0;
  while(this.user.userEmail.charAt(i)){
    if(this.user.userEmail.charAt(i).indexOf('@')!=-1){
      cnt++;
      }
      i++;
    }
    if(this.user.userEmail.indexOf('.com')!=-1 ||this.user.userEmail.indexOf('.net')!=-1||this.user.userEmail.indexOf('.co.ko')!=-1){
      dcnt++;
    }
    if(cnt!=1 || dcnt!=1){
      document.querySelector('#emailchk').innerHTML = '이메일 형식이 올바르지 않습니다.';
      return;
    }else{
      document.querySelector('#emailchk').innerHTML = '이메일 형식이 올바릅니다.';
      return true;
    }
}

genderchk(){
  if(!(this.user.userGender=='M' || this.user.userGender=='F')){
    document.querySelector('#genderchk').innerHTML = '성별을 입력해주세요';
    return;
  }else{
    return true;
  }
}
birthchk(){
  if(!this.user.userBirth){
    alert('생년월일을 입력해주세요');
    return;
  }else{
    return true;
  }
}
telchk(){
  if(this.user.userTel.length!=11){
    document.querySelector('#telchk').innerHTML = '-없이 휴대폰 번호 11자리를 정확하게 입력해주세요';
    return;
  }else{
    return true;
  }
}
  

  join(){
    this.genderchk();

    if(this.idchk() && this.pwdchk() && this.pwdcorchk() 
    && this.emailchk() && this.genderchk() && this.birthchk() && this.telchk()){
    this._http.post('http://localhost:88/user',this.user).subscribe(res=>{
      if(res===1){
        alert('회원가입에 성공하셨습니다.');
        location.href='/';
      }
    },err=>{
      console.log(err);
      alert('회원가입에 실패했습니다.');
    })
  }
  }
}

