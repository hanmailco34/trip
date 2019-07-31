import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  user:User[] = new Array();
  pUser:User;
  constructor(private _us:UserService,private _router:Router) { }

  ngOnInit() {
    this._us.get("http://localhost:88/users").subscribe(res=>{
        for(var re in res){
          if(res[re]['userLevel']=='1'){
            this.user.push(res[re]);
          }          
        }
    })
  }
  deleteUser(us){
    this._us.delete(us).subscribe(res=>{
      console.log(us); 
        alert('회원이 삭제되었습니다.');
        location.href='http://localhost:4200/userLevel'; 
    },err=>{
      alert('회원이 삭제에 실패했습니다.');
    })
  }

}
