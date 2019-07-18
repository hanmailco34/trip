import { Component, OnInit } from "@angular/core";
import { NgForm, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {  UserService } from "../user/user.service";

declare var $: any;
@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  loggedUser: UserService;
  constructor(private fb:FormBuilder, private router:Router) { 

  }

 

  ngOnInit() { 
    this.loggedUser = this.authService.getLoggedInUser();
    //로그인 된 유저 가져 옴 컴포넌트 만들고 수정 해야 함.
  }

  updateProfile(updatePerson: NgForm){

    let submitStatus:Boolean=false;

    if(
      this.loggedUser.upw!=null &&
      this.loggedUser.uNick!=null &&
      this.loggedUser.uTel!=null 
    ){
      let numpattern=/^[0-9]*$/;

      if(this.loggedUser.upw.length>=20 || 7<this.loggedUser,upw.length){
        submitStatus=false;
        alert('비밀번호는 8자 이상 20 이하 입니다.');
        $("#userPwd").focus();
        return;
      }if(this.loggedUser.uTel<=8 || this.loggedUser.uTel.length>=13){
        submitStatus=false;
        alert('연락처는 9~12자 이내로 입력해주세요.');
        $("#userTel").focus();
        return;
      }if(numpattern.test(this.loggedUser.uTel)==false){
        submitStatus=false;
        alert('연락처는 숫자만 입력 가능 합니다.');
        $("#userTel").focus();
        return;
      }else{
        submitStatus=true;
      }
    }
    if(submitStatus){
      this.userService.updateUser(this.loggedUser).subscribe(()=>{
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
