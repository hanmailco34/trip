import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { MypageService } from './mypage.service';

    
@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css']
})
export class MypageComponent implements OnInit {
  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  user:User = new User();
  plan:[] = [];
  with:[] = [];
  tip:[] = [];
  review:[] = [];
  constructor(private ms:MypageService) { }
  
  ngOnInit() {
    this.user.userNum=Number.parseInt(localStorage.getItem('userNum'));
    this.ms.getPlan(this.user.userNum).subscribe(res=>{
    for(var re in res){
     this.plan[re] = res[re];
    }
  })

  this.ms.getWIth(this.user.userNum).subscribe(res=>{
    for(var re in res){
      this.with[re] = res[re];
     }
  })

  this.ms.getTip(this.user.userNum).subscribe(res=>{
    for(var re in res){
      this.tip[re] = res[re];
     }
  })

  this.ms.getreview(this.user.userNum).subscribe(res=>{
    for(var re in res){
      this.review[re] = res[re];
     }
  })
  }

}
