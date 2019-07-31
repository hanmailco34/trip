import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommunityService } from '../../community.service';



@Component({
  selector: 'app-detail-plan',
  templateUrl: './detail-plan.component.html',
  styleUrls: ['./detail-plan.component.css']
})
export class DetailPlanComponent implements OnInit {
  plans:[] =[];
  planNum:string;
  userName:string;
  userNum:any;
  public editorValue:string = '';
  constructor(private _router:ActivatedRoute, private _cs:CommunityService,private router:Router) { }
 

  ngOnInit() {
    this.planNum = this._router.snapshot.paramMap.get('planNum');
   
    this._cs.getPlanByNum(this.planNum).subscribe(res=>{
    for(var re in res){
      this.plans[re] = res[re];
    }
    if(localStorage.getItem('userNum') == this.plans['userNum']){
      this.userNum = true;
    }
    document.querySelector('#planContent').innerHTML = this.plans['planContent']; //DB에 있는 게시글의 내용을 INNERHTML로 넣어주는 거임.
    this._cs.getUserbyUserNum(this.plans['userNum']).subscribe(res=>{
      this.userName = res['userNick'];
    })
   })
   
  }

  delPlan(){
    this._cs.delPlan(this.planNum).subscribe(res=>{
      console.log(res);
      if(res==1){
        alert('삭제에 성공하셨습니다.');
        this.router.navigate(['/tourPlan']);
      }else{
        alert('삭제에 실패했습니다.');
      }
    },err=>{
      alert('삭제에 실패했습니다.');
    })
  }
 
}
