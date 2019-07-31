import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../../community.service';
import { Tips } from './tips';



@Component({
  selector: 'app-tips-write',
  templateUrl: './tips-write.component.html',
  styleUrls: ['./tips-write.component.css']
})
export class TipsWriteComponent implements OnInit {
  tips:Tips = new Tips();
  
  constructor(private _cs:CommunityService) { }

  ngOnInit() {
    this.tips.tipWriter = localStorage.getItem('userNick');
    this.tips.userNum = localStorage.getItem('userNum');

  }
  insertTip(){
    this._cs.insertTip(this.tips).subscribe(res=>{
      if(res==1){
        alert('글쓰기에 성공하셨습니다.');
        location.href="/tips"
      }else{
        alert('글쓰기에 실패하셨습니다.');
        return;
      }
    }, err=>{
      alert('글쓰기에 실패하셨습니다.');
      return;
    })
  }
}
