import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommunityService } from '../../community.service';
var tipNum;

@Component({
  selector: 'app-edit-tips',
  templateUrl: './edit-tips.component.html',
  styleUrls: ['./edit-tips.component.css']
})
export class EditTipsComponent implements OnInit {
  
  tip:{}={};
  constructor(private _router:ActivatedRoute, private _cs:CommunityService) { }

  ngOnInit() {
   tipNum = this._router.snapshot.paramMap.get('tipNum');
   this._cs.getTipByNum(tipNum).subscribe(res=>{
      for(let re in res){
      this.tip[re] = res[re];
    }
    this.tip['tipWriter'] = localStorage.getItem('userNick');
    console.log(this.tip);
   });
  }
  editTip(){
    this._cs.modTip(this.tip).subscribe(res=>{
     if(res==1){
       alert('수정에 성공하셨습니다.');
       location.href='/tips/'+tipNum;
       
     }
    })
  }
  
}


