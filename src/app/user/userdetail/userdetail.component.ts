import { Component, OnInit } from "@angular/core";
import { NgForm, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {  User } from "../user";

declare var $: any;
@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  loggedUser: User;
  authService: any;
  
  constructor(private fb:FormBuilder, private router:Router) { 

  }

 

  ngOnInit() { 
    this.loggedUser = this.authService.getLoggedInUser();
    //로그인 된 유저 가져 옴 컴포넌트 만들고 수정 해야 함.
  }

  updateProfile(updatePerson: NgForm){

    let submitStatus:Boolean=false;

    if(
      this.loggedUser.userPwd!=null &&
      this.loggedUser.userNick!=null &&
      this.loggedUser.userTel!=null 
    ){
      let numpattern=/^[0-9]*$/;

      if(this.loggedUser.userPwd.length>=20 || this.loggedUser,userPwd.length>=8){
        submitStatus=false;
        alert('비밀번호는 8자 이상 20 이하 입니다.');
        $("#userPwd").focus();
        return;
      }if(this.loggedUser.userTel>=12 || this.loggedUser.userTel.length>=13){
        submitStatus=false;
        alert('연락처는 9~12자 이내로 입력해주세요.');
        $("#userTel").focus();
        return;
      }if(numpattern.test(this.loggedUser.userTel)==false){
        submitStatus=false;
        alert('연락처는 숫자만 입력 가능 합니다.');
        $("#userTel").focus();
        return;
      }else{
        submitStatus=true;
      }
    }
    if(submitStatus){
      this.loggedUser.updateUser(this.loggedUser).subscribe(()=>{
        this.authService.updateUserToken(this.loggedUser);
        alert("수정되었습니다.");
        this.router.navigate(["index"]);
      },
      (error:any)=>{
        alert("에러발생");
      });
    }
  }


  

}
