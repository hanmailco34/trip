import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../../community.service';
import { Reply } from '../../reply';

@Component({
  selector: 'app-detail-company',
  templateUrl: './detail-company.component.html',
  styleUrls: ['./detail-company.component.css']
})
export class DetailCompanyComponent implements OnInit {
  with:[] = [];
  replys:[] = [];
  reply:Reply = new Reply();
  constructor(private _cs:CommunityService) { }

  ngOnInit() {
    var companyNum='1'; //companyNum을 어떻게 줄것인가 우리가 같이 고민해야할 문제다...
    this._cs.getCompanyByNum(companyNum).subscribe(res=>{ //CompanyNum으로 게시글 찾는 메소드.
       for(let re in res){
       this.with[re] = res[re];
     }
     this.reply.withNum = this.with['withNum']; //동행인 페이지에서 리플쓰는 거니깐 위드넘만 넣어주는 거임.
     this.getReply();
    });
    }

   getReply(){
    this._cs.getReply(this.reply).subscribe(res=>{
      for(let re in res){
        this.replys[re] = res[re];
      }
    })
    
   }

   replyWrite(){
     this.reply.userNum = '15'; //나중에는 localstorage.getUserId로 대입해줄 것.
     this._cs.writeReply(this.reply).subscribe(res=>{
      console.log(res);
      if(res==1){
        alert('댓글이 성공적으로 작성되었습니다.');
        //location.href="" 여기에 이제 해당 글을 다시 볼 수 있는 소스가 필요.
      }
    });
   }

}
