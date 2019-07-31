import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../../community.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Reply } from '../../reply';

@Component({
  selector: 'app-detail-tips',
  templateUrl: './detail-tips.component.html',
  styleUrls: ['./detail-tips.component.css']
})
export class DetailTipsComponent implements OnInit {
  tips:[] = [];
  replys:[] = [];
  reply:Reply = new Reply();
  userNum:any;
  tipNum:any;
  constructor(private _cs:CommunityService, private _router:ActivatedRoute,private router:Router) { 
    
  }

  ngOnInit() {
    this.tipNum = this._router.snapshot.paramMap.get('tipNum'); 
    this._cs.getTipByNum(this.tipNum).subscribe(res=>{
      for(var re in res){
      this.tips[re]=res[re];
      
      }
    // if(localStorage.getItem('userNum')==this.tips['userNum']){
     
    //     document.querySelector('#modify').innerHTML = '<a href=/editTip/'+tipNum+'>수정</a>&nbsp;';
    //     document.querySelector('#modify').innerHTML +='<button type="button" onclick="delTip()">삭제</button>'; //여기 온클릭이 안먹음.. 왜..
    // }

    if(localStorage.getItem('userNum') == this.tips['userNum']){
      this.userNum = true;
    }

    this.reply.tipNum = this.tips['tipNum'];
    this.getReply(); 
    })
  }

  
  getReply(){
    this._cs.getReply(this.reply).subscribe(res=>{
      for(let re in res){
        this.replys[re] = res[re];
        this._cs.getUserbyUserNum(this.replys[re].userNum).subscribe(res=>{
          this.replys[re].userName = res['userNick'];
          console.log(this.replys[re]);
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
        location.href="/tips/"+this.tipNum; 
      }
    });
   }
  delTip(){
    this._cs.delTip(this.tipNum).subscribe(res=>{
     if(res==1){
       alert('삭제되셨습니다.');
       this.router.navigate(['/tips']);
     }else{
      alert('삭제에 실패했습니다.');
     }
    }, err=>{
      alert('삭제에 실패했습니다.');
    })
     
   }
}
