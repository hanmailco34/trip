import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
const url = "http://localhost:88/user/";
@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  user:User = new User();
  userNick:string;
  constructor(private _us:UserService,private _router:Router) {
    this._us.get(url+localStorage.getItem("userNum")).subscribe(res=>{
      for(var re in res){
        this.user[re]=res[re];        
      }
      this.userNick=this.user['userNick'];
    })
   }

  ngOnInit() {
    if(localStorage.getItem("userNum")==null){
      alert('로그인해주세요');
      this._router.navigate(['/']);
    }
  }

  checkNick(){
    this._us.postCheck(this.user).subscribe(res=>{
      if(res==null){
        document.querySelector('#checkNick').innerHTML="사용가능한 닉네임입니다.";
        return true;
      }else if(this.userNick===res['userNick']){
        document.querySelector('#checkNick').innerHTML="현재 닉네임입니다.";
        return;
      }      
      else{
        document.querySelector('#checkNick').innerHTML="중복된 닉네임입니다.";
        return;
      }
    })    
  }
  checkPassword(){
    if(this.user.userPwd.length<5){
      document.querySelector('#checkPassword').innerHTML = '비밀번호는 5글자 이상입니다.';
      return;
    } else{
      document.querySelector('#checkPassword').innerHTML = '';
      return true;
    }
  }
  checkRePassword(){
    if(this.user.userPwd!==this.user.userPwdChk){
      document.querySelector('#checkRePassword').innerHTML = '비밀번호가 일치하지 않습니다.';
      return;
    } else {
      document.querySelector('#checkRePassword').innerHTML = '';
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
      if(this.user.userEmail.indexOf('.com')!=-1 ||this.user.userEmail.indexOf('.net')!=-1||this.user.userEmail.indexOf('.co.kr')!=-1){
        dcnt++;
      }
      if(cnt!=1 || dcnt!=1){
        document.querySelector('#emailchk').innerHTML = '이메일 형식이 올바르지 않습니다.';
        return;
      }else{
        document.querySelector('#emailchk').innerHTML = '';
        return true;
      }
  }
  telchk(){
    if(this.user.userTel.length!=11){
      document.querySelector('#telchk').innerHTML = '-없이 휴대폰 번호 11자리를 정확하게 입력해주세요';
      return;
    }else{
      document.querySelector('#telchk').innerHTML = '';
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
  getFiles(evt){
    var reader = new FileReader();
    reader.onload =(e)=>{
      this.user.userPic = (<FileReader>e.target).result.toString();      
    }
    reader.readAsDataURL(evt.target.files[0]);
    this.user.userFile = evt.target.files[0];
    console.log(this.user);
  }
  insertFile(){
    
    this._us.insert(this.user).subscribe(res=>{
      if(res){
        alert("수정되었습니다");
        location.href='/userdetail';
      }
    })
  }
  change(){
    if(this.checkPassword() 
    && this.checkRePassword() && this.emailchk() && this.telchk() && this.birthchk()){
    this._us.insert(this.user).subscribe(res=>{
      if(res===1){
        alert('회원수정에 성공하셨습니다.');
        location.href='/';
      }
    },err=>{
      console.log(err);
      alert('회원수정에 실패했습니다.');
    })
  }
  }

}
