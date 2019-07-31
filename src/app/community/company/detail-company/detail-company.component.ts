import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../../community.service';
import { Reply } from '../../reply';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-company',
  templateUrl: './detail-company.component.html',
  styleUrls: ['./detail-company.component.css']
})
export class DetailCompanyComponent implements OnInit {
  with:[] = [];
  replys:[] = [];
  reply:Reply = new Reply();
  userNum:any;
  companyNum:string;
  userName:string;
  constructor(private _cs:CommunityService, private _router:ActivatedRoute) {
    }

  ngOnInit() {
    this.companyNum = this._router.snapshot.paramMap.get('withNum');

    this._cs.getCompanyByNum(this.companyNum).subscribe(res=>{
       for(let re in res){
       this.with[re] = res[re];
     }
     if(localStorage.getItem('userNum') == this.with['userNum']){
      this.userNum = true;
    }
    this._cs.getUserbyUserNum(this.with['userNum']).subscribe(res=>{
       
      this.userName = res['userNick'];
     })
     this.reply.withNum = this.with['withNum']; 
     this.getReply();
    });
    }

   getReply(){
    this._cs.getReply(this.reply).subscribe(res=>{
      for(let re in res){
        this.replys[re] = res[re];
        this._cs.getUserbyUserNum(this.replys[re].userNum).subscribe(res=>{
          this.replys[re].userName = res['userNick'];
          console.log(this.replys[re].userName);
         })
      }
    })
    
   }

   replyWrite(){
     this.reply.userNum = localStorage.getItem('userNum');
     this._cs.writeReply(this.reply).subscribe(res=>{
      console.log(res);
      if(res==1){
        alert('댓글이 성공적으로 작성되었습니다.');
        location.href="/company/"+this.companyNum; 
      }
    });
   }
   delCompany(){
    this._cs.delCompany(this.companyNum).subscribe(res=>{
      if(res==1){
        alert('삭제에 성공하셨습니다.');
        location.href="/company";
      }
    }, err=>{
      alert('삭제에 실패했습니다.');
    })
  }
}
